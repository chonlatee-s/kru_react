import React from 'react';
import ad2 from './img/b.png';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Job() {
    return (
      <Container className="boxWelcome">
          <Row >
            <Col md="12" lg="7">
              <Container fluid>
                <Row>
                    <Col xs="12">
                        <h1 className="topicTop" style={{textAlign:"left"}}>หางาน ตำแหน่งครู</h1>
                        <h5 className="topic_sec" style={{textAlign:"left", paddingBottom:"10px"}}>ตำแหน่งงานว่างกำลังรอคุณอยู่</h5>
                        <p>
                            คุณกำลังมองหางานอยู่ใช่ไหม ครูผู้ช่วย.com ได้รวบรวมตำแหน่งงานว่างหลายอัตรามาให้ ถ้าไม่อยากพลาดโอกาสดี ๆ คลิกปุ่มด้านล่างได้เลย
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Link to="joblist">
                            <button className="btn btn-outline-success btnFull">ดูตำแหน่งงานว่าง</button>
                        </Link>
                    </Col>
                </Row>
              </Container>
            </Col>
            <Col md="12" lg="5">
                <img src={ad2} className="img-fluid" alt="ครูผู้ช่วย"/>
            </Col>
          </Row>
      </Container>
    );
}

export default Job;

