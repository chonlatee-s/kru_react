import React from 'react';
import logo from './img/logo_brand.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Menu() {
    return (
        <nav className="navbar fixed-top navbar-expand-sm navbar-light" style={{ backgroundColor: "#ffffff" }}>
            <div className="container">
                <NavLink to="/" className="navbar-brand" ><img src={logo} style={{ width: "12%" }} alt="ครูผู้ช่วย" /><span className="logo_brand"> ครูผู้ช่วย.com</span></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav menu mx-auto">
                        <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <NavLink to="/how" activeStyle={{ color: "#28a745" }} className="nav-link" style={{ color: "#627498" }}>เกณฑ์การสอบ</NavLink>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <a class="nav-link" style={{ color: "#627498" }} href="https://xn--42cm7czac0a7jb0li.com/jobs/category/%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3%e0%b8%87%e0%b8%b2%e0%b8%99/">หางาน</a>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <NavLink to="/guidelines" activeStyle={{ color: "#28a745" }} className="nav-link" style={{ color: "#627498" }}>แนวข้อสอบ</NavLink>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <NavLink to="/file" activeStyle={{ color: "#28a745" }} className="nav-link" style={{ color: "#627498" }}>ไฟล์เอกสาร</NavLink>
                        </li>
                        {/* <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <NavLink to="/competition" activeStyle={{color:"#28a745"}} className="nav-link" style={{color:"#627498"}}>ผลการแข่งขัน</NavLink>
                        </li> */}
                        <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <NavLink to="/magic" activeStyle={{ color: "#28a745" }} className="nav-link" style={{ color: "#627498" }}>เซียมซีเสี่ยงทาย</NavLink>
                        </li>
                    </ul>
                    <div className="navbar-nav ml-md-auto mb-2" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <NavLink to="/coffee">
                            <button className="btn  btnFull" style={{ backgroundColor: "#fdefef" }}>
                                <FontAwesomeIcon icon={faCoffee} style={{ color: "#ff5f5f", fontSize: "16px", }} />
                                <span style={{ color: "#ff5f5f", fontSize: "14px", verticalAlign: "text-top" }}> เลี้ยงชานมไข่มุก</span>
                            </button>
                        </NavLink>
                    </div>
                    <div className="navbar-nav ml-md-auto mb-2" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <NavLink to="/exam/1"><button className="btn btn-primary btnFull">ฝึกทำข้อสอบ</button></NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Menu;

