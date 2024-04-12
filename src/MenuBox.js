import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function MenuBox() {
    return (
        <Container className="boxMenu text-center">
            <Row>
                <Col md="12" lg="4">
                    <Link to="professional">
                        <svg style={{ color: "#b7996c", paddingBottom:"10px" }} className="bi bi-clipboard-data" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" clipRule="evenodd" />
                            <path d="M4 11a1 1 0 112 0v1a1 1 0 11-2 0v-1zm6-4a1 1 0 112 0v5a1 1 0 11-2 0V7zM7 9a1 1 0 012 0v3a1 1 0 11-2 0V9z" />
                        </svg>
                        <p className="topicBoxMenu">มาตรฐานวิชาชีพ</p>
                        <p style={{ textAlign: "left" }}>
                            ข้อกำหนดเกี่ยวกับคุณลักษณะ และคุณภาพที่พึงประสงค์ในการประกอบวิชาชีพทางการศึกษา
                            ซึ่งผู้ประกอบวิชาชีพทางการศึกษาต้องประพฤติปฏิบัติตาม
                        </p>
                    </Link>
                </Col>
                <Col md="12" lg="4">
                    <Link to="tutorial">
                        <svg style={{ color: "#b7996c", paddingBottom:"10px" }} className="bi bi-pencil-square" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd"/>
                        </svg>
                        <p className="topicBoxMenu">เรียนออนไลน์</p>
                        <p style={{ textAlign: "left" }}>
                            ครูผู้ช่วย.com ได้พัฒนาสื่อการสอนออนไลน์ เพื่อให้เกิดประโยชน์กับคุณครูและผู้ที่สนใจทั่วไปเข้ามาศึกษากันฟรี ๆ 
                            อย่าลืมกดติดตาม (Subscribe) ให้กำลังใจพวกเราด้วยนะ
                        </p>
                    </Link>
                </Col>
                <Col md="12" lg="4">
                    <Link to="me">
                        <svg style={{ color: "#b7996c", paddingBottom:"10px" }} className="bi bi-people-circle text-center" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z" />
                            <path fillRule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clipRule="evenodd" />
                        </svg>
                        <p className="topicBoxMenu">เกี่ยวกับเรา</p>
                        <p style={{ textAlign: "left" }}>
                            เป็นสังคมแห่งการแลกเปลี่ยนเรียนรู้ แบ่งปันสื่อการสอน แนวข้อสอบครูผู้ช่วยทุกสังกัด
                            และเพื่อเตรียมความพร้อมสำหรับคนที่จะสอบครูผู้ช่วย ขอบคุณที่เข้ามาเยี่ยมชมและติดตามเว็บไซต์
                        </p>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default MenuBox;

