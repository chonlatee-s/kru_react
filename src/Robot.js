import React from 'react';
import robot from './img/robot.png';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Robot() {
    return (
        <div className="boxRobot">
            <div className="container">
                <Container className="boxWelcome">
                    <Row>
                        <Col xs="12" md="9">
                            <p className="robotTopic">พิเศษสำหรับ วิชาเอกคอมพิวเตอร์</p>
                            <p className="robotTopic2">ทำข้อสอบวิชาเอกได้ที่เว็บไซต์ นายโรบอท.com</p>
                            <p className="txtRobot">
                                ฝึกทำข้อสอบครูผู้ช่วย วิชาเอกคอมพิวเตอร์ ออนไลน์ ได้ที่เว็บไซต์ นายโรบอท.com 
                                เรามีผู้มีประสบการณ์การสอบ จากหลากหลายสังกัด ทำให้มั่นใจได้ว่า ข้อสอบทุกข้อ
                                สามารถนำไปประยุกต์เป็นแนวทางในการสอบได้
                            </p>
                            <a className="btn btn-success btnFull" href="https://นายโรบอท.com">ฝึกทำข้อสอบ</a>
                        </Col>
                        <Col xs="12" md="3">
                            <img src={robot} className="img-fluid" alt="ครูผู้ช่วย" width="250px"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Robot;

