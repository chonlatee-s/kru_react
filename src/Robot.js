import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'


function Robot() {
    return (
        <div className="container">
            <Container>
                <Row className="justify-content-md-center text-center">
                    <Col mx="auto">
                        <Alert variant="success">
                            พิเศษสำหรับเอกคอมพิวเตอร์ ทำข้อสอบวิชาเอกเพิ่มเติมได้ที่เว็บไซต์ <a href="https://นายโรบอท.com">"นายโรบอท.com"</a>
                        </Alert>
                    </Col>
                </Row>
                <br/><br/>
            </Container>
        </div>
    );
}

export default Robot;

