import React from 'react';
import ad2 from './img/b2.png';
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
                        <h1 className="topicTop" style={{textAlign:"left"}}>หางานตำแหน่ง ครู</h1>
                        <h5 className="topic_sec" style={{textAlign:"left", paddingBottom:"10px"}}>หางานตำแหน่งครู ทั้งรัฐและเอกชน</h5>
                        <p>
                            พึ่งเรียนจบหรือรอสอบครูผู้ช่วย จะดีกว่าไหม ถ้าได้ทำงานด้านการสอน เพื่อเก็บเกี่ยวประสบการณ์ก่อนสอบครูผู้ช่วย
                            "ครูผู้ช่วย.com" ได้รวบรวมตำแหน่งงานว่างมาให้คุณแล้ว มาทำงานที่เรารักกันเถอะ
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

