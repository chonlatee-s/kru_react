import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Competitor from './Competitor';
import { Link } from 'react-router-dom';

function Competition() {
    return (
        <Container className="boxCompetition">
          <Row className="text-center">
            <Col lg="12">
              <h1>
                <span className="topicTop">จัดอันดับการแข่งกัน</span>
              </h1>
              <h5 className="topic_sec">เรียงตามวันเวลา และคะแนนสูงสุด 10 คน</h5>
            </Col>
          </Row>
          <Row style={{marginTop:'50px'}}>
            <Col lg="12" className="mx-auto">
                <Competitor/>
            </Col>
          </Row>
          <Row style={{marginTop:'50px'}} className="text-center">
            <Col lg="12" className="mb-4 mx-auto">
              <Link to="/regis">
                <button className="btn btn-outline-success btnFull">เข้าร่วมแข่งขัน</button> &nbsp;
              </Link>
            </Col>
          </Row>
         
            {/* <Col sm="12" lg="7">
                <Container fluid>
                    <Row className="row">
                      <Col lg="12">
                        <h1>
                          <svg className="bi bi-trophy" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 1h10c-.495 3.467-.5 10-5 10S3.495 4.467 3 1zm0 15a1 1 0 011-1h8a1 1 0 011 1H3zm2-1a1 1 0 011-1h4a1 1 0 011 1H5z"/>
                            <path fillRule="evenodd" d="M12.5 3a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0zm-6-2a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd"/>
                            <path d="M7 10h2v4H7v-4z"/>
                            <path d="M10 11c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1z"/>
                          </svg> <span className="topicTop">จัดอันดับการแข่งกัน</span>
                        </h1>
                        <h5 className="topic_sec" style={{textAlign:"left", paddingBottom:"10px"}}>เรียงตามวันเวลา และคะแนนสูงสุด 5 คน</h5>
                        <p>
                          โหมดการแข่งกันจะมีข้อสอบทั้งหมด 25 ข้อ รวมทั้งภาค ก และ ภาค ข ใครทำคะแนนได้สูงสุด 
                          จะมีชื่อปรากฏอยู่ในผลการแข่งขัน "ขอเชิญเหล่าผู้กล้ามาร่วมประลองวิทยายุทธกัน"
                        </p>
                      </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                          <Link to="/regis">
                            <button className="btn btn-outline-success btnFull">เข้าร่วมแข่งขัน</button> &nbsp;
                          </Link>
                        </Col>
                    </Row>
                </Container>
            </Col> */}
       
      </Container>
    );
}

export default Competition;

