import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'

class Robot extends Component {
    state = {
        txt : "ถิ่นไทยในป่ากว้าง ห่างไกล แสงอารยธรรมใด ส่องบ้าง เห็นเทียนอยู่รำไร เล่มหนึ่ง ครูนั่นแหละอาจสร้าง เสกให้ชัชวาล [ ม.ล.ปิ่น มาลากุล ]"
    }
    getNews = () => {
        axios.get(`${window.location.origin}/getNews.php`)
            .then((res) => {
                this.setState({txt:res.data.news})
            })
            .catch((err) => {
                console.log(err)
            })
    }
    componentDidMount() { // ดึงข้อสอบจากฐานข้อมูล
        this.getNews()
    }


    render() {
        return(
            <Container className="containAlert">
                <Row className="justify-content-md-center">
                    <Col xs={12} md={11}>
                        <p style={{color:'#b7996c', 
                        fontWeight:'300',
                        textAlign:'center', 
                        padding:'10px', 
                        backgroundColor:'#f9f7f3',
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.10)",
                        borderRadius: "5px",
                        fontSize:"16px",
                        marginBottom:'70px'
                        }}>
                            {`" ${this.state.txt} "`}
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Robot


// import React from 'react';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Alert from 'react-bootstrap/Alert'


// function Robot() {
//     state = {
//         txt : "ถิ่นไทยในป่ากว้าง ห่างไกล แสงอารยธรรมใด ส่องบ้าง เห็นเทียนอยู่รำไร เล่มหนึ่ง ครูนั่นแหละอาจสร้าง เสกให้ชัชวาล [ ม.ล.ปิ่น มาลากุล ]"
//     }
//     return (
//         <div className="container">
//             <Container>
//                 <Row className="justify-content-md-center text-center">
//                     <Col mx="auto">
//                         <Alert variant="success">
//                             พิเศษสำหรับเอกคอมพิวเตอร์ ทำข้อสอบวิชาเอกเพิ่มเติมได้ที่เว็บไซต์ <a href="https://นายโรบอท.com">"นายโรบอท.com"</a>
//                         </Alert>
//                     </Col>
//                 </Row>
//                 <br/><br/>
//             </Container>
//         </div>
//     );
// }

// export default Robot;

