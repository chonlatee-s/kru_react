import React from 'react';

function Bar() {
    return (
        <div className="container-fluid boxBar" style={{paddingTop:"50px"}}>
            <a href="https://www.facebook.com/sharer/sharer.php?u=http://ครูผู้ช่วย.com" target="_blank" onclick="window.open(this.href, 'facebook-share','width=500,height=300');return false;" className="fa fa-facebook-square" style={{color: "#3B5998"}}></a>
            <a href="http://twitter.com/share?text=ฝึกทำแบบทดสอบครูผู้ช่วยออนไลน์&url=http://ครูผู้ช่วย.com.php" target="_blank" onclick="window.open(this.href, 'facebook-share','width=500,height=300');return false;" className="fa fa-twitter-square" style={{color: "#55ACEE"}}></a>
            <a href="https://www.youtube.com/channel/UCPA-YiEnmNJ9u9d_pJfVywA/videos?view_as=subscriber" target="_blank" className="fa fa-youtube-square" style={{color:"#ff0000"}}></a>
            <p style={{fontSize:"14px"}}>สงวนลิขสิทธิ์ © 2562 ครูผู้ช่วย.com</p>
        </div>
    );
}

export default Bar;

