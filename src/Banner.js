import React from 'react';
import ad from './img/b1.png';

function Banner() {
    return (
        <div className="container boxWelcome">
        <div className="row">
          <div className="col-lg-5 col-sm-12 mb-4 text-center">
            <img src={ad} className="img-fluid" />
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <p></p>
                  <h1>ฉันจะเป็นครูผู้ช่วย</h1>
                  <h5>มาเตรียมความพร้อมก่อนสอบกันเถอะ</h5>
                  <p></p>
                  <p>สามารถทำข้อสอบผ่านทางเว็บไซต์ "ครูผู้ช่วย.com" และแอปพลิเคชัน "ครูผู้ช่วย" ดาวน์โหลดได้แล้ววันนี้ที่ Google Play
                    ติดตามข้อมูลเพิ่มเติมได้ที่ Facebook Page
                    </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <a className="btn btn-outline-success" href="#">ดาวน์โหลดแอปพลิเคชัน</a> &nbsp;
                  <a className="btn btn-outline-primary" href="#">เพจ ครูผู้ช่วย.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Banner;

