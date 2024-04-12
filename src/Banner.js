import React from 'react';
import ad from './img/band.png';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Banner() {
  return (
    <Container className="boxWelcome">
      <Row >
        <Col md="12" lg="5" className="mb-4"><img src={ad} className="img-fluid" alt="ครูผู้ช่วย" /></Col>
        <Col md="12" lg="7">
          <Container fluid>
            <Row>
              <Col xs="12" className="mt-4">
                <h1 className="topicTop" style={{ textAlign: "left" }}>ฉันจะเป็นครูผู้ช่วย</h1>
                <h5 className="topic_sec" style={{ textAlign: "left", paddingBottom: "10px" }}>มาเตรียมความพร้อมก่อนสอบกันเถอะ</h5>
                <p>
                  สามารถทำข้อสอบผ่านทางเว็บไซต์ "ครูผู้ช่วย.com" และแอปพลิเคชัน "ครูผู้ช่วย"
                  ดาวน์โหลดฟรีได้แล้ววันนี้ที่ Google Play ติดตามข้อมูลเพิ่มเติมได้ที่ Facebook
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <a className="btn btn-outline-success btnFull" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.kruApp.kruphoochuay">ดาวน์โหลดแอปพลิเคชัน</a> &nbsp;
                <a className="btn btn-outline-primary btnFull" target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/%E0%B8%84%E0%B8%A3%E0%B8%B9%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2com-110744400336909/">เพจ ครูผู้ช่วย.com</a>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;

