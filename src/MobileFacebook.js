import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import { FacebookLogin } from 'react-facebook-login-component';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class MobileFacebook extends Component {
    responseGoogle = (res) => {
        let dataLogin = {
            UserId:res.googleId,
            Name:res.profileObj.name, 
            Profile:res.profileObj.imageUrl,
            IsLoggedIn:true,
            type:'google'
        }
        this.props.dispatchFromStore(dataLogin)
    }

    responseFacebook = (res) => {
        let dataLogin = {
            UserId:res.userID,
            Name:res.name, 
            Profile:res.picture.data.url,
            IsLoggedIn:true,
            type:'facebook'
        }
        this.props.dispatchFromStore(dataLogin)
    }
    
    render() {
        const dataStore = this.props.stateFromStore
        if(dataStore.IsLoggedIn) return <Redirect to='/Exam/3' />
        else{
            return (
                <Container className="boxRegis">
                    <Row>
                        <Col lg="12 mb-4">
                            <h5 className="topic_sec">
                                ลงทะเบียนเพื่อเข้าร่วมการแข่งขัน
                            </h5>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center text-center">
                        <Col md="6">
                            <GoogleLogin
                                clientId="254303991922-di1i2i7bcp7fuvtp8ib5a7uirsq2kopm.apps.googleusercontent.com"
                                onSuccess={this.responseGoogle}
                                buttonText="ลงทะเบียนด้วย Google"
                                // render={renderProps => (
                                //     <button onClick={renderProps.onClick} style={{
                                //         fontSize:'19px',
                                //         backgroundColor:"#ff5f5f",
                                //         color:"#ffffff",
                                //         border: 'none',
                                //         padding:'10px',
                                //         width:'60%',
                                        
                                //     }}>ลงทะเบียนด้วย Google</button>
                                // )}
                            />
                            <p style={{marginTop:'18px'}}>หรือ</p>
                            <FacebookLogin
                                appId="761688894366809"
                                fields="name,email,picture"
                                callback={this.responseFacebook} 
                               
                               
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} style={{
                                        fontSize:'19px',
                                        backgroundColor:"#395794",
                                        color:"#ffffff",
                                        border: 'none',
                                        padding:'10px',
                                        width:'60%'
                                    }}>ลงทะเบียนด้วย Facebook</button>
                                )}
                            />

                    {/* <FacebookLogin socialId="761688894366809"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v7.0"
                       className="facebook-login"
                       buttonText="Login With Facebook"/> */}

                            <p style={{marginTop:'25px',fontSize:'12px'}}><Link to='/Policy'>นโยบายความเป็นส่วนตัว</Link></p>
                            <p style={{marginTop:'0px',fontSize:'12px'}}>
                                โหมดแข่งขันอยู่ในช่วงทดลองใช้งาน หากไม่สามารถลงทะเบียนได้ให้ทำข้อสอบในโหมดทั่วไป
                            </p>
                            
                        </Col>
                    </Row>
                </Container>
            );
        } // end else
    }
}

const mapStateToProps = (state) => {
    return {
        stateFromStore : state.data
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dispatchFromStore : (dataLogin) => {
            return dispatch({ type:'ADD_DATA', playload:dataLogin })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (MobileFacebook)
