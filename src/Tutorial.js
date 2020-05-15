import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import smHome5 from './img/smHome5.jpg';
import smHome4 from './img/smHome4.jpg';
import smHome3 from './img/smHome3.jpg';
import smHome2 from './img/smHome2.jpg';
import smHome1 from './img/smHome1.jpg';

function Tutorial() {
    return (
        <Container className="boxTutorial">
            <Row>
                <Col lg="12">
                    <h1 className="topicTop text-center">บทเรียนออนไลน์</h1>
                    <h5 className="topic_sec">วิดีโอสั้น ๆ เข้าใจง่าย อย่าลืม<span style={{color:"#fe8081"}}> "กดติดตาม" </span>ให้กำลังใจพวกเราด้วยนะ</h5>
                </Col>
            </Row>
            <Row className="justify-content-md-center" style={{paddingTop:"50px"}}>
                <Col lg="auto" className="mb-4">
                    <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={smHome5} />
                        <Card.Body>
                            <Card.Text>สร้างชั้นเรียนออนไลน์ด้วย Google Classroom</Card.Text>
                            <svg style={{color:"#28a745"}} className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd"/>
                            </svg> <span style={{fontSize:"16px", fontWeight:300,color:"#28a745", cursor:"pointer"}}><a href="https://www.youtube.com/watch?v=MGAgvIUj8VU&list=PL91Isj7zXY5xLoCe-Jt0H2Hm-_q0Yp6qI&index=2&t=4s" target="_blank" rel="noopener noreferrer">เข้าสู่บทเรียน</a></span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="auto" className="mb-4">
                    <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={smHome1} />
                        <Card.Body>
                            <Card.Text>สร้างเว็บไซต์อย่างง่ายด้วย Google Sites</Card.Text>
                            <svg style={{color:"#28a745"}} className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd"/>
                            </svg> <span style={{fontSize:"16px", fontWeight:300,color:"#28a745", cursor:"pointer"}}><a href="https://www.youtube.com/watch?v=tJlWVEVUrvI&list=UUPA-YiEnmNJ9u9d_pJfVywA&index=3" target="_blank" rel="noopener noreferrer">เข้าสู่บทเรียน</a></span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="auto" className="mb-4">
                    <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={smHome3} />
                        <Card.Body>
                            <Card.Text>การดาวน์โหลดฟอนต์และติดตั้งฟอนต์เพื่อใช้งาน</Card.Text>
                            <svg style={{color:"#28a745"}} className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd"/>
                            </svg> <span style={{fontSize:"16px", fontWeight:300,color:"#28a745", cursor:"pointer"}}><a href="https://www.youtube.com/watch?v=doQduqTV_4Q&list=PL91Isj7zXY5zKykALKsOAyKf6nsvFmbRC&index=2&t=3s" target="_blank" rel="noopener noreferrer">เข้าสู่บทเรียน</a></span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="auto" className="mb-4">
                    <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={smHome2} />
                        <Card.Body>
                            <Card.Text>สร้างเกมตอบคำถามด้วย Kahoot</Card.Text>
                            <svg style={{color:"#28a745"}} className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd"/>
                            </svg> <span style={{fontSize:"16px", fontWeight:300,color:"#28a745", cursor:"pointer"}}><a href="https://www.youtube.com/watch?v=NUc65ufYkwM&list=PL91Isj7zXY5zkfMwUzpe3QWrBIVOyPCuQ" target="_blank" rel="noopener noreferrer">เข้าสู่บทเรียน</a></span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="auto" className="mb-4">
                    <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={smHome4} />
                        <Card.Body>
                            <Card.Text>เก็บและแชร์ข้อมูลออนไลน์ด้วย Dropbox</Card.Text>
                            <svg style={{color:"#28a745"}} className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd"/>
                            </svg> <span style={{fontSize:"16px", fontWeight:300,color:"#28a745", cursor:"pointer"}}><a href="https://www.youtube.com/watch?v=lRhcVMESpvI&list=PL91Isj7zXY5yEcwHH2iwAlbVp51Y8Pj1m&index=2&t=17s" target="_blank" rel="noopener noreferrer">เข้าสู่บทเรียน</a></span>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Tutorial;

