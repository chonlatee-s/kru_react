import React from 'react';

function Winner() {
    return (
        <div className="container boxWinner">
        <div className="row">
          <div className="col-lg-5 col-sm-12 mb-4 text-center">

                    <ul style={{ textAlign: "left" }}><p style={{fontSize:"24px", fontWeight:400}}>ผู้เข้าร่วมแข่งขัน</p>
                        <li>ชายชล  คนเลี้ยงแมว
                          <div className="progress" style={{height: "10px"}}>
                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width:"70%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">7</div>
                          </div>
                        </li>
                        <li>บรรเจิด  เลิศภิรมย์สมฤดี
                          <div className="progress" style={{height: "10px"}}>
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width:"40%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">4</div>
                          </div>
                        </li>
                        <li>คณิต  คิตเลขเร็ว
                          <div className="progress" style={{height: "10px"}}>
                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width:"10%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">1</div>
                          </div>
                        </li>
                    </ul>
   
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <h1>
                    <svg className="bi bi-trophy" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 1h10c-.495 3.467-.5 10-5 10S3.495 4.467 3 1zm0 15a1 1 0 011-1h8a1 1 0 011 1H3zm2-1a1 1 0 011-1h4a1 1 0 011 1H5z"/>
                    <path fillRule="evenodd" d="M12.5 3a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0zm-6-2a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd"/>
                    <path d="M7 10h2v4H7v-4z"/>
                    <path d="M10 11c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1z"/>
                    </svg> จัดอันดับการแข่งกัน
                  </h1>
                  <h5>เรียงตามวันเวลา และคะแนนสูงสุด 3 คน</h5>
                  <p></p>
                  <p>หากต้องการเข้าร่วมการแข่งขันจัดอันดับคะแนน ต้องลงทะเบียนเพื่อเข้าสู่ระบบผ่านทาง Facebook หรือ Google เท่านั้น 
                     มาสร้างความท้าทายไปด้วยกัน
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <a className="btn btn-outline-success" href="#">เข้าร่วมแข่งขัน</a> &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Winner;

