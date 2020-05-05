import React from 'react';
import Menu from './Menu';
function How() {
  return (
    <div>
      <Menu />
      <div className="container boxHow">
        <h1 className="text-center">เกณฑ์การสอบครูผู้ช่วย</h1>
        <p className="topic_sec">การสอบครูผู้ช่วยแบ่งออกเป็น 3 ส่วน (สามารถเปลี่ยนแปลงได้)</p>
      </div>

      <div className="container">
        <div className="row text-center">
          <div className="col-sm">
            <span style={{ fontSize: "120px", textAlign: "center", fontWeight: "200", color: "#b7996c" }}>ก</span>
            <p></p>
            <p style={{ textAlign: "left", color: "#627498" }}>ภาค ก คือความรอบรู้ ความสามารถทั่วไป และความรู้ความเข้าใจเกี่ยวกับคุณธรรม จริยธรรม และอุดมการณ์ของความเป็นครู และมาตรฐานวิชาชีพทางการศึกษา</p>
          </div>
          <div className="col-sm">
            <span style={{ fontSize: "120px", textAlign: "center", fontWeight: "200", color: "#b7996c" }}>ข</span>
            <p></p>
            <p style={{ textAlign: "left", color: "#627498" }}>ภาค ข คือความรู้ความสามารถที่ใช้เฉพาะตำแหน่ง เช่น ความรู้ความสามารถเกี่ยวกับวิชาการศึกษาและสาขาวิชาเอก </p>
          </div>
          <div className="col-sm">
            <span style={{ fontSize: "120px", textAlign: "center", fontWeight: "200", color: "#b7996c" }}>ค</span>
            <p></p>
            <p style={{ textAlign: "left", color: "#627498" }}>ภาค ค คือความเหมาะสมกับตำแหน่งและวิชาชีพ ประเมินโดยวิธีการสัมภาษณ์ สังเกต ตรวจสอบเอกสาร หรือวิธีอื่นที่เหมาะสม</p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-sm" style={{paddingTop:"10px", paddingBottom:"50px"}}>
            <a className="btn btn-outline-success" href="#">อ่านรายละเอียดทั้งหมด</a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default How;
