import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Bar() {
    return (
        <Container fluid className="boxBar">
            <Row>
                <Col>
                    <a href="https://facebook.com/%E0%B8%84%E0%B8%A3%E0%B8%B9%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2com-110744400336909/" target="_blank" rel="noopener noreferrer" style={{color: "#3B5998"}}><i className="fa fa-facebook-square"></i></a>
                    <a href="https://www.youtube.com/channel/UCPA-YiEnmNJ9u9d_pJfVywA/videos?view_as=subscriber" target="_blank" rel="noopener noreferrer" style={{color:"#ff0000"}}><i className="fa fa-youtube-square"></i></a>
                    <p style={{fontSize:"14px"}}>สงวนลิขสิทธิ์ © 2562 ครูผู้ช่วย.com</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Bar;

