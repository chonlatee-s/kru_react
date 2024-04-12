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
                <span className="topicTop">จัดอันดับการแข่งขัน</span>
              </h1>
              <h5 className="topic_sec">เรียงตามวันเวลา และคะแนน 9 คน</h5>
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
      </Container>
    );
}

export default Competition;

