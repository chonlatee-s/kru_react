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
                        <h5 className="topic_sec">เราจะสร้างสรรค์และพัฒนาสิ่งดี ๆ ให้กับสังคมต่อไป</h5>
                    </Col>
                </Row>
                <Row style={{paddingTop:"50px"}}>
                    <Col lg="3" md="12">
                        <Alert style={{backgroundColor:"#00a5df"}}>
                            <Alert.Heading style={{color:"#ffffff", textAlign:'center'}}>ธนาคารกรุงไทย</Alert.Heading>
                            <p style={{color:"#ffffff",marginBottom:'0px'}}>Prompt Pay  082-781-8941</p>
                            <p style={{color:"#ffffff"}}>ชื่อบัญชี  ชลธี สินสาตร์</p>
                        </Alert>
                    </Col>
                    <Col lg="9" md="12">
                        <div className="boxText">
                            <p style={{marginBottom:'2px'}}>
                                สวัสดีครับทุกคน ผมกำลังพัฒนาเว็บไซต์นี้ให้ดียิ่งขึ้น เพื่อเพื่อนครู และผู้ที่กำลังจะสอบครูผู้ช่วย
                                รวมไปถึงสอนทำสื่อการสอน แจกไฟล์เอกสาร และแนวข้อสอบฟรี โดยได้รวบรวมมาเก็บไว้ ให้ง่ายต่อการดาวน์โหลด
                                ถ้าคิดว่าเว็บไซต์นี้มีประโยชน์ และอยากสนับสนุนค่า "กาแฟหรือชานมไข่มุก" สักแก้ว 
                                ก็ขอบคุณมากครับ :)
                            </p>
                            <p style={{fontSize:'14px', fontWeight:'300'}}>ป.ล. ถ้ามีโฆษณามากวนใจนิดหน่อย อย่าพึ่งรำคาญกันนะ เพราะนั่นคือค่ากาแฟและชานมไข่มุกเช่นกัน ฮ่า ๆ</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Coffee;
