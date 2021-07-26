import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

class Coffee extends Component {
    render() {
        return (
            <Container className="boxMagic">
                <Row>
                    <Col lg="12">
                        <h1 className="topicTop text-center">By Me a Coffee</h1>
                        <h5 className="topic_sec">เราจะสร้างสรรค์สิ่งดี ๆ ให้กับสังคมต่อไป </h5>
                    </Col>
                </Row>
                <Row style={{paddingTop:"50px"}}>
                    <Col lg="3" md="12">
                        <Alert style={{backgroundColor:"#00a5df"}}>
                            <Alert.Heading style={{color:"#ffffff", textAlign:'center'}}>พร้อมเพย์</Alert.Heading>
                            <p style={{color:"#ffffff", marginBottom:'0px', textAlign:'center'}}>082-781-8941</p>
                            <p style={{color:"#ffffff", textAlign:'center'}}>ชลธี สินสาตร์</p>
                        </Alert>
                    </Col>
                    <Col lg="9" md="12">
                        <div className="boxText">
                            <p style={{marginBottom:'2px'}}>
                                คุณคือกำลังใจที่ดีเสมอมา<br/>
                                ขอบคุณที่แวะมาเยี่ยมชม<br/>
                                ขอบคุณที่มาร่วมเป็นสังคมเดียวกัน<br/>
                                <b>และ...ขอบคุณที่เลี้ยงชานมไข่มุกแอดมินครับ :)</b>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Coffee;
