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
    axios.get(`http://ครูผู้ช่วย.com/getUser.php`)
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

      <Row>
        <Col lg="6">
          {
            this.state.dataUser.map((item, index) => {
              return (
                <div>
                  {
                    index <= 4 ?
                      <Row key={index}>
                        <Col xs="1" style={{ marginTop: '8.5px'}}>
                          <Image src={item.profile} roundedCircle style={{ width: "30px", height: "30px", border: '0px solid #ddd' }} />
                        </Col>
                        <Col xs="11">
                          {

                            index === 0 ?
                              <div>
                                <svg style={{ color: 'goldenrod' }} className="bi bi-trophy" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3 1h10c-.495 3.467-.5 10-5 10S3.495 4.467 3 1zm0 15a1 1 0 011-1h8a1 1 0 011 1H3zm2-1a1 1 0 011-1h4a1 1 0 011 1H5z" />
                                  <path fillRule="evenodd" d="M12.5 3a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0zm-6-2a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd" />
                                  <path d="M7 10h2v4H7v-4z" />
                                  <path d="M10 11c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1z" />
                                </svg>
                                <label style={{ fontSize: "14px", color: 'goldenrod', fontWeight: 300 }}>{item.name}</label>
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
                <div>
                  {
                    index >= 5 ?
                      <Row key={index}>
                        <Col xs="1" style={{ marginTop: '8.5px'}}>
                          <Image src={item.profile} roundedCircle style={{ width: "30px", height: "30px", border: '0px solid #ddd' }} />
                        </Col>
                        <Col xs="11">
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
    );
  }
}

export default Competitor;
