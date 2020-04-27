import React from 'react';
import logo from './img/logo_brand.png';

function Menu() {
    return (
        <nav className="navbar fixed-top navbar-expand-sm navbar-light" style={{backgroundColor: "#ffffff"}}>
            <div className="container">
                <a className="navbar-brand" href="#"><img src={logo} style={{width:"15%"}}/><span className="logo_brand"> ครูผู้ช่วย.com</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav menu mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{color:"#627498"}}>เกณฑ์การสอบ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{color:"#627498"}}>แนวข้อสอบ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{color:"#627498"}}>ไฟล์เอกสาร</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{color:"#627498"}}>เซียมซีเสี่ยงทาย</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{color:"#627498"}}>จัดอันดับการแข่งกัน</a>
                        </li>
                    </ul>
                    <div className="navbar-nav ml-md-auto">
                        <a className="btn btn-primary" href="#">ทำแบบทดสอบ</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Menu;

