import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ExamList from './ExamList'
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'
import Result from './Result'
import Image from 'react-bootstrap/Image'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import AdSense from "react-adsense";
import { Advertisement } from "semantic-ui-react";


class Exam extends Component {
    state = {
        waitResult: false,
        waitData: false,
        examLists: [{ id: '', question: '', ch1: '', ch2: '', ch3: '', ch4: '', answer: '', ref: '', reply: '0', check: false }],
        arrPosition: 0,
        score: 0,
        btnPrev: false,
        btnNext: true,
        btnCheckAnser: false,

        minute: 0,
        sec: 59,
        colorBar: 'danger',
        showText: false
    }
    getExam = () => {
        let dataLogin = {
            UserId: '',
            Name: '',
            Profile: '',
            IsLoggedIn: false,
            type: ''
        }
        let exam = []
        var base64 = require('base-64');
        var utf8 = require('utf8');

        if (this.props.match.params.topic === '1' || this.props.match.params.topic === '2') this.props.dispatchFromStore(dataLogin)
        if (this.props.match.params.topic === '1' || this.props.match.params.topic === '2' || this.props.match.params.topic === '3') {
            // axios.get(`${window.location.origin}/getExams.php?topic=${this.props.match.params.topic}`)
            axios.get(`${window.location.origin}/getExamsAll.php`)
                .then((res) => {

                    var bytes = base64.decode(res.data);
                    var text = utf8.decode(bytes);
                    var data = JSON.parse(text)

                    exam = data.map((item) => {
                        return {
                            id: item.id,
                            question: item.question,
                            ch1: item.ch1,
                            ch2: item.ch2,
                            ch3: item.ch3,
                            ch4: item.ch4,
                            answer: item.answer,
                            ref: item.ref,
                            reply: '0', // เพิ่มมาใหม่ เพื่อเก็บคำตอบ
                            check: false
                        }
                    })
                    this.setState({
                        examLists: exam, waitData: true, minute: this.props.match.params.topic === '3' ? 24 : 9
                    }, () => {
                        this.startTimer() // รับข้อมูลเสร็จ ให้เวลาเริ่มทำงาน
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            this.setState({ showText: true })
        }
    }
    componentDidMount() { // ดึงข้อสอบจากฐานข้อมูล
        this.getExam()
    }
    componentWillUnmount() {

    }
    setArr = (e) => {
        if (e === 'next') {
            this.setState({ btnPrev: true, arrPosition: this.state.arrPosition + 1 })
            if (this.state.arrPosition + 1 === this.state.examLists.length - 1) { this.setState({ btnNext: false }) }
        }
        else {
            this.setState({ btnNext: true, arrPosition: this.state.arrPosition - 1 })
            if (this.state.arrPosition - 1 === 0) { this.setState({ btnPrev: false }) }
        }
    }
    nextQuestion = (data) => {
        // ถ้ายังไม่ถึงตำแหน่งสุดท้ายก็บวกเพิ่มเรื่อย ๆ
        if (this.state.arrPosition !== this.state.examLists.length - 1) this.setState({ btnPrev: true, arrPosition: this.state.arrPosition + 1 })

        if (this.state.arrPosition + 1 === this.state.examLists.length - 1) { this.setState({ btnNext: false }) }
        const dataExam = [...this.state.examLists]

        // หาตำแหน่งที่กดมา
        const newData = dataExam.findIndex((item) => {
            return item.id === data.id
        })

        // แก้ไขเฉพาะตำแหน่งที่กดมา
        dataExam[newData] = {
            id: data.id,
            question: data.question,
            ch1: data.ch1,
            ch2: data.ch2,
            ch3: data.ch3,
            ch4: data.ch4,
            answer: data.answer,
            ref: data.ref,
            reply: data.reply,
            check: data.check
        }

        // อัพเดทข้อมูลใหม่
        this.setState({
            examLists: dataExam
        }, () => {
            this.checkFinished()
            this.checkBar()
        })
    }
    checkFinished = () => {
        let check = 0
        this.state.examLists.forEach((item) => {
            if (item.reply === '0') check += 1
        })
        if (check === 0) this.setState({ btnCheckAnser: true })
    }
    checkAnswer = () => {
        clearInterval(this.clockCall)
        let result = 0
        this.state.examLists.forEach((item) => {
            if (item.answer === item.reply) result += 1
        })
        this.setState({ score: result, waitResult: true, waitData: false })

        // ส่งข้อมูลไปฐานข้อมูล
        const dataStore = this.props.stateFromStore
        let qs = require('qs');
        let data = {
            id: dataStore.UserId,
            name: dataStore.Name,
            profile: dataStore.Profile,
            score: result
        }
        if (this.props.match.params.topic === '3') {
            axios.post(`${window.location.origin}/sentUser.php`, qs.stringify(data))
                .then((res) => {
                    // console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            console.log('do it')
        }
    }
    startTimer = () => {
        this.clockCall = setInterval(() => {
            this.decrementClock()
        }, 1000);
    }
    decrementClock = () => {
        if (this.state.sec !== 0) {
            this.setState({ sec: this.state.sec - 1 })
        }
        else {
            if (this.state.minute === 0) {
                clearInterval(this.clockCall)
                this.checkAnswer();
                // console.log("time out!!!")
            }
            else {
                this.setState({ minute: this.state.minute - 1 })
                this.setState({ sec: 59 })
            }
        }
    }
    changeZeroSec = (a) => {
        return a < 10 ? `0${a}` : a
    }
    checkCount = () => {
        let count = 0
        this.state.examLists.map((item) => {
            return item.reply !== '0' ? count += 1 : null
        })
        return count
    }
    checkBar = () => {
        let bar = this.checkCount()
        if ((bar * 100) / this.state.examLists.length >= 80) this.setState({ colorBar: 'success' })
        else if ((bar * 100) / this.state.examLists.length >= 45) this.setState({ colorBar: 'warning' })
        else this.setState({ colorBar: 'danger' })
    }
    render() {
        const dataStore = this.props.stateFromStore
        // ถ้าไม่ได้ล๊อกอิน และเข้าสู่โหมดแข่งขันให้กลับไปหน้าหลัก
        if (dataStore.IsLoggedIn === false && this.props.match.params.topic === '3') return (<Redirect to='/' />)
        return (
            <Container className="boxExam">
                {
                    this.state.waitData ?
                        <div>
                            <Advertisement unit="leaderboard">
                                <AdSense.Google
                                    client="ca-pub-5901161227057601"
                                    format=""
                                    slot="4780951832"
                                    style={{ display: "inline-block", height: 90, width: 500 }}
                                />
                            </Advertisement>
                            <Row>
                                <Col lg="12" className="text-center mb-2">
                                    {
                                        dataStore.IsLoggedIn ?
                                            <div>
                                                <Image src={dataStore.Profile} roundedCircle style={{ width: "60px", height: "60px", border: '3px solid #ddd' }} />
                                                <div style={{ fontSize: '14px', fontWeight: '300', paddingBottom: '10px', paddingTop: '3px' }}>{dataStore.Name}</div>
                                            </div>
                                            : null
                                    }
                                    <p style={{ fontSize: "18px", fontWeight: 300, margin: "3px", color: "#b7996c" }}>
                                        {
                                            this.state.minute !== 0 ? 'เวลา ' + this.changeZeroSec(this.state.minute) + ' : ' + this.changeZeroSec(this.state.sec) + ' นาที'
                                                : this.state.sec !== 0 ? 'เวลา ' + this.changeZeroSec(this.state.sec) + ' วินาที' : 'หมดเวลา'
                                        }
                                    </p>
                                    <ProgressBar striped variant={this.state.colorBar} now={(this.checkCount() * 100) / this.state.examLists.length} label={`${(this.checkCount() * 100) / this.state.examLists.length}%`} style={{ height: "10px" }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <ExamList
                                        questionAll={this.state.examLists[this.state.arrPosition]}
                                        number={this.state.arrPosition}
                                        nextQuestion={this.nextQuestion.bind(this)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="2">
                                    {
                                        this.state.btnPrev ?
                                            <div onClick={() => this.setArr('prev')} style={{ cursor: "pointer" }}>
                                                <svg style={{ color: "#b7996c" }} className="bi bi-arrow-left" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                    <path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            : null
                                    }
                                </Col>
                                <Col xs="8" className="text-center">
                                    {
                                        this.state.btnCheckAnser
                                            ? <button className="btn btn-outline-success btnFull" onClick={this.checkAnswer}>ตรวจคำตอบ</button>
                                            : <span style={{ fontSize: "14px", fontWeight: 300 }}>{dataStore.IsLoggedIn ? 'โหมดแข่งขัน' : 'โหมดทั่วไป'}</span>
                                    }
                                </Col>
                                <Col xs="2" style={{ textAlign: "right" }}>
                                    {
                                        this.state.btnNext ?
                                            <div onClick={() => this.setArr('next')} style={{ cursor: "pointer" }}>
                                                <svg style={{ color: "#b7996c" }} className="bi bi-arrow-right" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd" />
                                                    <path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            : null
                                    }
                                </Col>
                            </Row>
                        </div>
                        :
                        this.state.waitResult ? <Result result={this.state.examLists} score={this.state.score} />
                            : // ถ้ายังโหลดข้อสอบไม่เสร็จ และ ผลสอบยังไม่เป็น true ก็แสดงการโหลด
                            <Row>
                                <Col xs="12" className="text-center">
                                    <Spinner animation="grow" variant="info" />
                                    <Spinner animation="grow" variant="danger" />
                                    <Spinner animation="grow" variant="warning" />
                                    <p style={{ fontSize: "16px" }}>{this.state.showText ? 'ไม่พบข้อมูล' : 'กรุณารอสักครู่'}</p>
                                </Col>
                            </Row>
                }
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stateFromStore: state.data
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dispatchFromStore: (dataLogin) => {
            return dispatch({ type: 'ADD_DATA', playload: dataLogin })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Exam)
