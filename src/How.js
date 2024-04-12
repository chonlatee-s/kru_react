import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function How() {
  return (
      <Container className="boxHow">
        <Row>
            <Col lg="12">
                <h1 className="topicTop text-center">เกณฑ์การสอบครูผู้ช่วย</h1>
                <h5 className="topic_sec">การสอบครูผู้ช่วยแบ่งออกเป็น 3 ส่วน</h5>
            </Col>
        </Row>
        <Row className="text-center">
          <Col xs="12" sm="4">
            <span style={{ fontSize: "120px", textAlign: "center", fontWeight: "200", color: "#b7996c" }}>ก</span>
            <p></p>
            <p style={{ textAlign: "left", color: "#627498" }}>
              ภาค ก คือความรู้ความสามารถทั่วไป ความสามารถในการคิดวิเคราะห์
              ทักษะภาษาอังกฤษ ความรู้และลักษณะการเป็นข้าราชการที่ดี
               </p>
          </Col>
          <Col xs="12" sm="4">
            <span style={{ fontSize: "120px", textAlign: "center", fontWeight: "200", color: "#b7996c" }}>ข</span>
            <p></p>
            <p style={{ textAlign: "left", color: "#627498" }}>
              ภาค ข คือมาตรฐานความรู้และประสบการณ์วิชาชีพ
              มาตรฐานความรู้ทั่วไปในการจัดการเรียนการสอน
              มาตรฐานความรอบรู้ในเนื้อหาวิชาที่สอน
              ความรอบรู้กฎหมายที่เกี่ยวข้องกับการปฏิบัติงาน
              </p>
            </Col>
          <Col xs="12" sm="4">
            <span style={{ fontSize: "120px", textAlign: "center", fontWeight: "200", color: "#b7996c" }}>ค</span>
            <p></p>
            <p style={{ textAlign: "left", color: "#627498" }}>
              ภาค ค คือความเหมาะสมกับตำแหน่ง วิชาชีพ และการปฏิบัติงานในสถานศึกษา
              คุณลักษณะส่วนบุคคล การพัฒนาตนเองและวิชาชีพ
            </p>
            </Col>
        </Row>

        <Row className="text-center">
          <Col xs="12" style={{paddingTop:"10px"}}>
            <a className="btn btn-outline-success btnFull" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1B758nz2pnZILn43dxtFd6fpy3rpjdR2M?usp=sharing">อ่านรายละเอียดทั้งหมด</a>
          </Col>
        </Row>
      </Container>
  );
}

export default How;
