import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

class AboutMe extends Component {
    state = {
        credit:[{name:''}],
        loadStatus:true
    }
    
    getCredit = () => {
        let creditAll = []
        this.setState ({loadStatus:true})
        axios.get(`./getTeacher.php`)
        .then((res)=>{
            creditAll = res.data.map((item)=>{
                return {
                    name:item.name,
                }
            })
            this.setState({credit:creditAll, loadStatus:false})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    componentDidMount(){ // ดึงข้อสอบจากฐานข้อมูล
        this.getCredit()
    }
    render() {
        return (
            <Container className="boxMagic">
                <Row>
                    <Col lg="12">
                        <h1 className="topicTop text-center">เกี่ยวกับเรา</h1>
                        <h5 className="topic_sec">เราจะสร้างสรรค์และพัฒนาสิ่งดี ๆ ให้กับสังคมต่อไป</h5>
                    </Col>
                </Row>
                <Row style={{paddingTop:"50px"}}>
                    <Col lg="12">
                        <div className="boxText">
                            <p>
                                เป็นสังคมแห่งการแลกเปลี่ยนเรียนรู้ แบ่งปันสื่อการสอน แนวข้อสอบครูผู้ช่วยทุกสังกัด
                                และเพื่อเตรียมความพร้อมสำหรับคนที่จะสอบครูผู้ช่วย ขอบคุณที่เข้ามาเยี่ยมชมและติดตามเว็บไซต์
                                หากมีข้อผิดพลาด คำแนะนำ หรือข้อสงสัยประการใด
                                ติดต่อผู้ดูแลเว็บไซต์ได้ที่อีเมล kruphoochuay@gmail.com
                            </p>
                        </div>
                    </Col>
                    {
                        this.state.loadStatus === true ? 
                        <Col lg="12" style={{paddingTop:"50px"}}>
                            <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="danger" />
                            <Spinner animation="grow" variant="warning" />
                            <p style={{fontSize:"16px"}}>กรุณารอสักครู่</p>
                        </Col>
                    :
                        <Col lg="12">
                            <h5 className="topic_sec" style={{marginTop:'50px', marginBottom:"20px"}}>ผู้ร่วมแบ่งปันความรู้</h5>
                            <Table responsive="sm" size="sm" striped bordered style={{color:"#627498", textAlign:"left"}}>
                                <tbody>
                                    {
                                        this.state.credit.map((item,index)=>{
                                          return(
                                            <tr key={index}><td>{`${index+1}. ${item.name}`}</td></tr>
                                          )  
                                        })
                                    }
                                    <tr>
                                        <td style={{fontSize:"12px", fontWeight:300, textAlign:"center"}}>
                                            หากต้องการแบ่งปันความรู้ให้กับผู้อื่น เช่น แนวข้อสอบ สื่อการสอน 
                                            ติดต่อผู้ดูแลเว็บไซต์ได้ที่อีเมลด้านบน มาร่วมสร้างสังคมแห่งการแบ่งปันไปด้วยกัน
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    }
                </Row>
            </Container>
        );
    }
}
export default AboutMe;
