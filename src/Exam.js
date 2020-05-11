import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ExamList from './ExamList'
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'

class Exam extends Component {
    state = {
        waitData:false,
        examLists : [{ id:'', question:'', ch1:'', ch2:'', ch3:'', ch4:'', answer:'', ref:'', reply:'0' }],
        arrPosition : 0,
        score : 0,
        btnPrev:false,
        btnNext:true,
    }
    getExam = () => {
        let exam = []
        axios.get(`http://localhost/kru_react_server/getExam.php?topic=${this.props.match.params.topic}`)
        .then((res)=>{
            // console.log(res.data)
            exam = res.data.map((item)=>{
                return {
                    id:item.id,
                    question:item.question,
                    ch1:item.ch1,
                    ch2:item.ch2,
                    ch3:item.ch3,
                    ch4:item.ch4,
                    answer:item.answer,
                    ref:item.ref,
                    refply:'0' // เพิ่มมาใหม่ เพื่อเก็บคำตอบ
                }
            })
            this.setState({examLists:exam, waitData:true})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    componentDidMount(){ // ดึงข้อสอบจากฐานข้อมูล
        this.getExam()
    }
    setArr = (e) => {
        if (e === 'next') {
            this.setState({ btnPrev:true, arrPosition : this.state.arrPosition + 1})
            if(this.state.arrPosition+1 === this.state.examLists.length-1) { this.setState({btnNext:false}) }
        } 
        else {
            this.setState({ btnNext:true, arrPosition : this.state.arrPosition - 1 })
            if(this.state.arrPosition-1 === 0) { this.setState({btnPrev:false}) }
        }
    }
    nextQuestion = (data) => {
        // ถ้ายังไม่ถึงตำแหน่งสุดท้ายก็บวกเพิ่มเรื่อย ๆ
        if(this.state.arrPosition !== this.state.examLists.length-1) this.setState({ btnPrev:true, arrPosition : this.state.arrPosition + 1}) 

        if(this.state.arrPosition+1 === this.state.examLists.length-1) { this.setState({btnNext:false}) }
        const dataExam = [...this.state.examLists]

        // หาตำแหน่งที่กดมา
        const newData = dataExam.findIndex((item) => {
            return item.id === data.id
        })

        // แก้ไขเฉพาะตำแหน่งที่กดมา
        dataExam[newData] = { 
            id : data.id, 
            question : data.question, 
            ch1 : data.ch1, 
            ch2 : data.ch2, 
            ch3 : data.ch3, 
            ch4 : data.ch4, 
            answer : data.answer,
            ref : data.ref,
            reply : data.reply
        } 

        // อัพเดทข้อมูลใหม่
        this.setState({
            examLists : dataExam
        })
    }

    render() {
        // console.log(this.props.match.params.topic)
        return (
            <Container className="boxExam">
            { 
                this.state.waitData ?
                <div>
                    <Row>
                        <Col xs="12" className="text-center">
                            <p style={{fontSize:"30px", fontWeight:300, color:"#ff5f5f"}}> เวลา 09:10 นาที</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" style={{paddingBottom:"10px"}}>
                            <ProgressBar striped variant="success" now={80} label={`80%`} style={{height: "10px"}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <ExamList
                                questionAll = { this.state.examLists[ this.state.arrPosition ] }
                                number = {this.state.arrPosition}
                                nextQuestion = {this.nextQuestion.bind(this)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2">
                        {
                            this.state.btnPrev?
                                <div onClick = {() => this.setArr('prev')} style={{cursor:"pointer"}}>
                                    <svg style={{color:"#b7996c"}} className="bi bi-arrow-left" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd"/>
                                        <path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                            :null
                        }
                        </Col>
                        <Col xs="8" className="text-center">
                            <span style={{fontSize:"14px", fontWeight:300}}>โหมดการแข่งกัน</span>
                        </Col>
                        <Col xs="2" style={{textAlign:"right"}}>
                        { 
                            this.state.btnNext?
                                <div onClick = {() => this.setArr('next')} style={{cursor:"pointer"}}>
                                    <svg style={{color:"#b7996c"}} className="bi bi-arrow-right" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd"/>
                                        <path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                            :null
                        }
                        </Col>
                    </Row>
                </div>
                :
                <Row>
                    <Col xs="12" className="text-center">
                        <Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="danger" />
                        <Spinner animation="grow" variant="warning" />
                        <p style={{fontSize:"16px"}}>กรุณารอสักครู่</p>
                    </Col>
                </Row>
            }
            </Container>
        );
    }
}

export default Exam;
