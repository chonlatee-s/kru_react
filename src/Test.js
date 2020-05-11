import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Competitor from './Competitor';
import { Link } from 'react-router-dom';

class Test extends Component {
    state = {
        showButton:false,
        showForm:true,
        showBtnStart:false,
        topic:'0',

        swG:true,
        swC:false
    }

    myRefG = React.createRef()
    myRefC = React.createRef()
    myRefForm = React.createRef()
    myRefTopic = React.createRef()
    myRefBtnStart = React.createRef()

    checkCompet = () => {
        if(this.myRefG.current.checked){
            this.setState({
                showForm:true,
                swG:true,
                showBtnStart:false, // ปิดปุ่มทั่วไปก่อน จนกว่าจะมีการเลือกวิชาที่จะสอบ

                showButton:false,
                swC:false
            })
        }else{
            this.setState({
                showForm:false,
                swG:false,

                showButton:true,
                swC:true
            })
        }

    }
    getTopic = () => {
        this.myRefTopic.current.value !== '0' ? this.setState({showBtnStart:true}) : this.setState({showBtnStart:false})
        this.setState({topic:this.myRefTopic.current.value})
    }
    render() {
        return (

        <Container className="boxCompetition">
            <Row>
                <Col sm="12" lg="7">
                    <Container fluid>
                        <Row>
                            <Col lg="12">
                                <h1 className="topicTop">ฝึกทำข้อสอบ</h1>
                                <h5 className="topic_sec" style={{textAlign:"left"}}>จะทำคนเดียวหรือแข่งกับคนอื่น ๆ ก็เลือกโหมดได้ตามใจชอบ </h5>
                            </Col>
                        </Row>
                        <Row style={{paddingTop:"20px"}}>
                            <Col lg="12">
                            {
                                this.state.showForm?
                                <Form ref={this.myRefForm}>
                                    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                                        <Form.Control as="select" size="sm" onChange={this.getTopic} ref={this.myRefTopic}>
                                            <option value="0">เลือกหัวข้อที่ต้องการสอบ</option>
                                            <option value="1">ภาค ก</option>
                                            <option value="2">ภาค ข</option>
                                        </Form.Control>
                                    </Form.Group>
                                    {
                                        this.state.showBtnStart?
                                        <Link to={`/Exam/${this.state.topic}`}><button className="btn btn-outline-success btnFull" type="button" ref={this.myRefBtnStart}>เริ่มทำข้อสอบ</button></Link>
                                        :null
                                    }
                                </Form>
                                :null
                            }
                                <div style={{paddingTop:"10px"}}>
                                    <Form.Check 
                                        type="switch"
                                        id="custom-switch"
                                        label="โหมดทั่วไป"
                                        onChange={this.checkCompet}
                                        ref={this.myRefG}
                                        checked={this.state.swG}
                                    />
                                    <p style={{ fontWeight:300, fontSize:"14px"}}>
                                        โหมดทั่วไปจะมีข้อสอบทั้งหมด 10 ข้อ ให้เวลาทำ 10 นาที แข่งกับตัวเองฝึกฝนไปเรื่อย ๆ 
                                    </p>
                                </div>
                                <div>
                                    <Form.Check 
                                        type="switch"
                                        id="custom-switch"
                                        label="โหมดแข่งขัน"
                                        onChange={this.checkCompet}
                                        ref={this.myRefC}
                                        checked={this.state.swC}
                                    />
                                    <p style={{fontWeight:300, fontSize:"14px"}}>
                                        โหมดแข่งขันจะมีข้อสอบทั้งหมด 25 ข้อ รวมทั้งภาค ก และ ภาค ข เวลา 25 นาที ใครทำคะแนนได้สูงสุด
                                        จะมีชื่อปรากฏอยู่ในผลการจัดอันดับ "ขอเชิญเหล่าผู้กล้ามาร่วมประลองวิทยายุทธกัน"
                                    </p>
                                    {
                                        this.state.showButton ? 
                                        <button className="btn btn-outline-success btnFull mb-4">เข้าร่วมแข่งขัน</button>
                                        :null
                                    }
                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col sm="12" lg="5" className="mb-4 text-center" style={{paddingTop:"20px"}}>
                    <Competitor/>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Test;
