import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

class Competitor extends Component {
    render() {
        return (
          <div style={{ textAlign: "left" }}><p style={{fontSize:"18px", fontWeight:400}}>ผลการแข่งขัน</p>
          <label style={{fontSize:"14px", fontWeight:200}}>ชายชล  คนเลี้ยงแมว</label>
            <ProgressBar striped variant="info" now={70} label={`70%`} style={{height: "10px"}}/>
          <label style={{fontSize:"14px", fontWeight:200}}>บรรเจิด  เลิศภิรมย์สมฤดี</label>
            <ProgressBar striped variant="warning" now={40} label={`40%`} style={{height: "10px"}}/>
          <label style={{fontSize:"14px", fontWeight:200}}>คณิต  คิตเลขเร็ว</label>
            <ProgressBar striped variant="danger" now={40} label={`40%`} style={{height: "10px"}}/>
          <label style={{fontSize:"14px", fontWeight:200}}>แคง  ชอบตั้งวง</label>
            <ProgressBar striped variant="danger" now={20} label={`20%`} style={{height: "10px"}}/>
          <label style={{fontSize:"14px", fontWeight:200}}>ฉันคือ หุ่นยนต์</label>
            <ProgressBar striped variant="danger" now={0} label={`0%`} style={{height: "10px"}}/>
     
    </div>
            // <ul style={{ textAlign: "left" }}><p style={{fontSize:"24px", fontWeight:400}}>ผลการจัดอันดับ</p>
            //       <li>ชายชล  คนเลี้ยงแมว
            //         <ProgressBar striped variant="info" now={70} label={`70%`} style={{height: "10px"}}/>
            //       </li>
            //       <li>บรรเจิด  เลิศภิรมย์สมฤดี
            //         <ProgressBar striped variant="warning" now={40} label={`40%`} style={{height: "10px"}}/>
            //       </li>
            //       <li>คณิต  คิตเลขเร็ว
            //         <ProgressBar striped variant="danger" now={15} label={`15%`} style={{height: "10px"}}/>
            //       </li>
            //       <li>แคง  ชอบตั้งวง
            //         <ProgressBar striped variant="danger" now={10} label={`10%`} style={{height: "10px"}}/>
            //       </li>
            //       <li>ดาบเจ็ดสี 
            //         <ProgressBar striped variant="danger" now={0} label={`0%`} style={{height: "10px"}}/>
            //       </li>
            // </ul>
        );
    }
}

export default Competitor;
