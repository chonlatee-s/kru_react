import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import Image from 'react-bootstrap/Image'

class Competitor extends Component {
  state =  {
    dataUser:[{name:'', profile:'', score:0, colorBar:'danger'}]
  }

  getUser = () => {
    axios.get(`http://localhost/kru_react_server/getUser.php`)
            .then((res)=>{
                let data = res.data.map((item)=>{
                    return {
                        name:item.name,
                        profile:item.profile,
                        score:item.score,
                        colorBar: (item.score*100) / 25 >= 80 ? 'success' : (item.score*100) / 25 >= 45 ? 'warning' : 'danger'
                    }
                })
                this.setState({ dataUser:data})
            })
            .catch((err)=>{
                console.log(err)
            })
  }
  componentDidMount() {
    this.getUser()
  }
    render() {
        return (
          <div style={{ textAlign: "left" }}><p style={{ fontSize: "18px", fontWeight: 400 }}>ผลการแข่งขัน</p>
          {
            this.state.dataUser.map((item,index)=>{
              return (
                <Row key={index}>
                  <Col xs="2" style={{marginTop:'8px'}}>
                    <Image src ={item.profile} roundedCircle style={{width:"40px", height:"40px", border: '0px solid #ddd'}}/>
                  </Col>
                  <Col xs="10" style={{paddingLeft:'0px'}} >
                    <label style={{ fontSize: "14px", fontWeight: 200 }}>{item.name}</label>
                    <ProgressBar striped variant={ item.colorBar } now={(item.score*100)/25} label={`${(item.score*100)/25}%`} style={{ height: "10px" }} />
                  </Col>
                </Row>
              )
            })
          }
          </div>
        );
    }
}

export default Competitor;
