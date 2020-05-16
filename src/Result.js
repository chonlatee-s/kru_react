import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image'

import { connect } from 'react-redux'

class Result extends Component {
    
    render() {
        const dataStore = this.props.stateFromStore
        return (
            <Container>
                <Row>
                    <Col lg="12 mb-4">
                        <h1 className="topicTop text-center">สรุปผลการทดสอบ</h1>
                        <h5 className="topic_sec">เฉลยเฉพาะข้อที่ทำผิดเท่านั้น</h5>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" lg="3" className="text-center mb-2">
                { 
                    dataStore.IsLoggedIn?
                    <div>
                        <Image src ={dataStore.Profile} roundedCircle style={{width:"60px", height:"60px", border: '3px solid #ddd'}}/>
                        <div style={{fontSize:'14px', fontWeight:'300', paddingBottom:'5px', paddingTop:'3px'}}>{dataStore.Name}</div>
                    </div>
                    :null
                       
                }
                    
                
                    <Alert style={{backgroundColor:"#f9f7f3"}}>
                        <p style={{margin:"0px", fontSize:"28px"}}>คะแนนรวม</p>
                        <p style={{fontSize:"60px", margin:"0px"}}>{`${this.props.score}/${this.props.result.length}`}</p>
                        <p style={{fontSize:"16px", marginBottom:"5px", color:"#b7996c"}}>
                            {
                                this.props.score>=9 ? <span>ยอดเยี่ยม ความฝันอยู่แค่เอื้อม</span>
                                :this.props.score>=6 ? <span>ใกล้ความเป็นจริงแล้ว สู้ ๆ </span>
                                :this.props.score>=4 ? <span>คะแนนดีขึ้นแล้ว แต่ยังไปได้อีก</span>
                                :<span>พยายามอีกนิดนะ เดี๋ยวก็ทำได้</span>
                            }
                        </p>
                        <ProgressBar striped variant="info" now={(this.props.score*100)/this.props.result.length} label={`${(this.props.score*100)/this.props.result.length}%`} style={{height: "10px"}}/>
                    </Alert>
                    </Col>
                    <Col md="12" lg="9">
                        <div className="boxText">
                            {
                                this.props.result.map((item,index)=>{
                                    return (
                                        <div key={index}>
                                            <p className="question">ข้อ {index+1} {item.question}</p>
                                            <p className="result"><span style={{color:"#b7996c", fontWeight:300}}>ตอบ</span> 
                                                {
                                                    item.reply==='1' ?  ' '+item.ch1 :
                                                    item.reply==='2' ?  ' '+item.ch2 :
                                                    item.reply==='3' ?  ' '+item.ch3 : 
                                                    item.reply==='4' ?  ' '+item.ch4 : ' ไม่ได้ตอบคำถาม'
                                                }
                                            </p>
                                            
                                            {
                                                item.check===true ? null : 
                                                <p className="result">
                                                <span style={{color:"#b7996c", fontWeight:300}}>เฉลย </span>
                                                    {
                                                        item.answer==='1' ? item.ch1 :
                                                        item.answer==='2' ? item.ch2 :
                                                        item.answer==='3' ? item.ch3 : item.ch4
                                                    }
                                                </p>
                                            }
                                           
                                            <div className="checkAns">
                                                {
                                                    item.check===true ? 
                                                    <svg className="bi bi-check" width="0.8em" height="0.8em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
                                                    </svg>
                                                    :
                                                    <svg className="bi bi-x" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd"/>
                                                        <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd"/>
                                                    </svg>
                                                }
                                                <span style={{fontSize:"12px"}}> 
                                                {
                                                    item.ref===''?<del>อ้างอิง</del>
                                                    :<a href={item.ref} target="_blank" rel="noopener noreferrer">อ้างอิง</a>
                                                }
                                                </span>
                                            </div>
                                            <hr style={{marginTop:"0px"}}/>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stateFromStore : state.data
    }
}
export default connect(mapStateToProps, null) (Result)