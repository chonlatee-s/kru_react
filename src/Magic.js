import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'

class Magic extends Component {
    state = {
        id:'',
        result:'',
        show:true,
        open:true,
        loadStatus:false
    }
    
    getMagic = () => {
        this.setState ({loadStatus:true})
        let x = Math.floor((Math.random() * 28) + 1);
        setTimeout(function(){ 
            axios.get(`./getPredict.php?data=${x}`)
            .then((res)=>{
                this.setState({id:res.data.id, result:res.data.result, open:false, loadStatus:false})
            })
            .catch((err)=>{
                console.log(err)
            })
        }.bind(this), 2000);
    }

    playAgain = () => {
        this.setState ({
            id:'',
            result:'',
            show:true,
            open:true,
            loadStatus:false
        })
    }

    render() {
        if(this.state.open) {
            return (
                <Container className="boxMagic">
                    <Row>
                        <Col lg="12">
                            <h1 className="topicTop text-center">เซียมซีเสี่ยงทาย</h1>
                            <h5 className="topic_sec">ตั้งจิตอธิษฐาน กดปุ่มเสี่ยงทายแล้วรอดูคำทำนาย</h5>
                        </Col>
                    </Row>
                    <Row className="text-center" style={{paddingTop:"50px"}}>
                        <Col lg="12">
                            {
                               this.state.loadStatus === true ? 
                               <div>
                                   <Spinner animation="grow" variant="info" />
                                   <Spinner animation="grow" variant="danger" />
                                   <Spinner animation="grow" variant="warning" />
                                   <p style={{fontSize:"16px"}}>กรุณารอสักครู่</p>
                               </div>
                               :<div>
                                    <svg style={{ color: "#b7996c" }} className="bi bi-question-square" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clipRule="evenodd"/>
                                        <path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                    </svg>
                                    <br/><br/>
                                    <button className="btn btn-outline-success btnFull" onClick = {this.getMagic}>เริ่มเสี่ยงทาย</button>
                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            );
        }else {
            return (
                <Container className="boxMagic">
                    <Row>
                        <Col lg="12">
                            <h1 className="topicTop text-center">เซียมซีเสี่ยงทาย</h1>
                            <h5 className="topic_sec">ตั้งจิตอธิษฐาน กดปุ่มเสี่ยงทายแล้วรอดูคำทำนาย</h5>
                        </Col>
                    </Row>
                    <Row style={{paddingTop:"50px"}}>
                        <Col lg="12">
                            <div className="boxText">
                                <span style={{fontSize:"24px",fontWeight:400}}>คุณได้ใบที่ {this.state.id}</span>
                                <p>{this.state.result}</p>
                                <span style={{fontSize:"14px"}}>ที่มา วัดหนองบัว จังหวัดอุบลราชธานี</span>
                            </div>
                            <br/>
                            <div className="text-center">
                                <button className="btn btn-outline-success btnFull" onClick = {this.playAgain}>ลองอีกครั้ง</button>
                            </div>
                        </Col>
                    </Row>

                </Container>
            );
        }
    }
}
export default Magic;
