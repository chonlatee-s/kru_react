import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import ListGroup from 'react-bootstrap/ListGroup'

class Exam extends Component {
    render() {
        // console.log(this.props.match.params.topic)
        return (
            <Container className="boxExam">
                <Row>
                    <Col xs="12" className="text-center">
                        <p style={{fontSize:"30px", fontWeight:300, color:"#ff5f5f"}}> เวลา 09:10 นาที</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" style={{paddingBottom:"10px"}}>
                        <ProgressBar striped variant="success" now={20} label={`10%`} style={{height: "10px"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <ListGroup variant="flush">
                            <ListGroup.Item  variant="success"><span style={{fontWeight:400, fontSize:"20px"}}>ข้อ 1 แมวอะไรเอ่ยตัวใหญ่</span></ListGroup.Item>
                            <ListGroup.Item  style={{cursor:"pointer"}}><span style={{fontWeight:300}}>ก. แมวตัวใหญ่</span></ListGroup.Item>
                            <ListGroup.Item  style={{cursor:"pointer"}}><span style={{fontWeight:300, color:"#ff5f5f"}}>ข. แมวตัวน้อย</span></ListGroup.Item>
                            <ListGroup.Item  style={{cursor:"pointer"}}><span style={{fontWeight:300}}>ค. หมาตัวเล็ก</span></ListGroup.Item>
                            <ListGroup.Item  style={{cursor:"pointer"}}><span style={{fontWeight:300}}>ง. ถูกทุกข้อ</span></ListGroup.Item>
                            <ListGroup.Item  style={{cursor:"pointer"}}></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="2">
                    <svg style={{color:"#28a745"}} className="bi bi-arrow-left" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd"/>
                        <path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd"/>
                    </svg>
                    </Col>
                    <Col xs="8" className="text-center">
                        <span style={{fontSize:"14px", fontWeight:300}}>โหมดการแข่งกัน</span>
                    </Col>
                    <Col xs="2" style={{textAlign:"right"}}>
                    <svg style={{color:"#28a745"}} className="bi bi-arrow-right" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd"/>
                    <path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd"/>
                    </svg>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Exam;
