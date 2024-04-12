import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Policy extends Component {
    render() {
        return (
            <Container className="boxMagic">
                <Row>
                    <Col lg="12">
                        <h1 className="topicTop text-center">นโยบายความเป็นส่วนตัว</h1>
                        <h5 className="topic_sec">ศึกษารายละเอียดให้เข้าใจก่อนใช้งาน</h5>
                    </Col>
                </Row>
                <Row style={{paddingTop:"50px"}}>
                    <Col lg="12">
                        <div className="boxText">
                            <p>
                                เว็บไซต์ครูผู้ช่วย.com สร้างขึ้นมาเพื่อเตรียมความพร้อมสำหรับผู้ที่ต้องการสอบครูผู้ช่วย 
                                ตอนนี้ได้พัฒนาระบบการแข่งขันเพื่อเพิ่มความท้าทายมากยิ่งขึ้น 
                                จึงต้องมีการลงทะเบียนผ่าน Google ก่อนเข้าใช้งาน 
                                ซึ่งอาจจะต้องใช้ข้อมูลบางส่วนในการลงทะเบียน เช่น ชื่อ รูปโปรไฟล์ เพื่อแสดงข้อมูลหลังจบการแข่งขัน 
                                ขอรับรองว่าข้อมูลของท่านจะไม่ถูกนำไปใช้ประโยชน์อื่นใดทั้งสิ้น 
                                ขอบคุณที่เข้ามาเยี่ยมชมเว็บไซต์ ครูผู้ช่วย.com เราจะพัฒนาให้ดียิ่งขึ้น
                            </p>
                        </div>
                    </Col>
                </Row>

            </Container>
        );
    }
}
export default Policy;
