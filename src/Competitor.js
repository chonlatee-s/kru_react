import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import Image from 'react-bootstrap/Image'

class Competitor extends Component {
  state = {
    dataUser: [{ name: '', profile: '', score: 0, colorBar: 'danger' }]
  }

  getUser = () => {
    axios.get(`./getUser.php`)
      .then((res) => {
        let data = res.data.map((item) => {
          return {
            name: item.name,
            profile: item.profile,
            score: item.score,
            colorBar: (item.score * 100) / 25 >= 80 ? 'success' : (item.score * 100) / 25 >= 45 ? 'warning' : 'danger'
          }
        })
        this.setState({ dataUser: data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  componentDidMount() {
    this.getUser()
  }
  render() {
    return (
     <div> 
          {
            this.state.dataUser.map((item, index) => {
              return (
                <div key={index}>
                {
                  index === 0 ?
                  
                    <Row>
                        <Col xs="12" className="text-center" style={{ marginBottom:'20px'}}>
                        <Image src={item.profile} roundedCircle style={{ width: "50px", height: "50px", border: '0px solid #ddd' }} /><br/>
                          <svg style={{ color: 'goldenrod', marginBottom:'18px' }} className="bi bi-trophy" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 1h10c-.495 3.467-.5 10-5 10S3.495 4.467 3 1zm0 15a1 1 0 011-1h8a1 1 0 011 1H3zm2-1a1 1 0 011-1h4a1 1 0 011 1H5z" />
                            <path fillRule="evenodd" d="M12.5 3a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0zm-6-2a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd" />
                            <path d="M7 10h2v4H7v-4z" />
                            <path d="M10 11c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1z" />
                          </svg>
                          <label style={{ fontSize: "18px", color: 'goldenrod', fontWeight: 300 }}>{item.name}  <span style={{fontSize:'14px'}}>{(item.score * 100) / 25}%</span></label>
                        </Col>
                    </Row>
                  :null
                }
                </div>
              )
            }
          )}
      <Row>
        <Col lg="6">
          {
            this.state.dataUser.map((item, index) => {
              return (
                <div key={index}>
                  {
                    index <= 4 && index !==0?
                      <Row>
                          <Col xs="2" style={{ marginTop: '8.5px',paddingRight:'0'}}>
                            <Image src={item.profile} roundedCircle style={{ width: "30px", height: "30px", border: '0px solid #ddd' }} />
                          </Col>
                          <Col xs="10" style={{paddingLeft:'0'}}>
                          {
                              index === 1 ?
                              <div>
                                <svg style={{color:'#808B96'}} className="bi bi-award-fill" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                                </svg>
                                <label style={{ fontSize: "14px", color: '#808B96', fontWeight: 300 }}>{item.name}</label>
                              </div>
                              :index === 2 ?
                              <div>
                                <svg style={{color:'#CD6155'}} className="bi bi-award-fill" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                                </svg>
                                <label style={{ fontSize: "14px", color: '#CD6155', fontWeight: 300 }}>{item.name}</label>
                              </div>
                              :
                              <label style={{ fontSize: "14px", fontWeight: 200 }}>{item.name}</label>
                          }
                          <ProgressBar striped variant={item.colorBar} now={(item.score * 100) / 25} label={`${(item.score * 100) / 25}%`} style={{ height: "8px" }} />
                        </Col>
                      </Row>
                      : null
                  }
                </div>
              )
            })
          }
        </Col>

        <Col lg="6">

          {
            this.state.dataUser.map((item, index) => {
              return (
                <div key={index}>
                  {
                    index >= 5 ?
                      <Row>
                        <Col xs="2" style={{ marginTop: '8.5px',paddingRight:'0'}}>
                          <Image src={item.profile} roundedCircle style={{ width: "30px", height: "30px", border: '0px solid #ddd' }} />
                        </Col>
                        <Col xs="10" style={{paddingLeft:'0'}}>
                          <label style={{ fontSize: "14px", fontWeight: 200 }}>{item.name}</label>
                          <ProgressBar striped variant={item.colorBar} now={(item.score * 100) / 25} label={`${(item.score * 100) / 25}%`} style={{ height: "8px" }} />
                        </Col>
                      </Row>
                      : null
                  }
                </div>
              )
            })
          }

        </Col>
      </Row>
      </div>
    );
  }
}

export default Competitor;
