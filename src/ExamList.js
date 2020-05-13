import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

class ExamList extends Component {
    mange = (e) => {
        let data =  {
            id : this.props.questionAll.id, 
            question : this.props.questionAll.question, 
            ch1 : this.props.questionAll.ch1, 
            ch2 : this.props.questionAll.ch2, 
            ch3 : this.props.questionAll.ch3, 
            ch4 : this.props.questionAll.ch4, 
            answer : this.props.questionAll.answer, 
            ref: this.props.questionAll.ref,
            reply : e.currentTarget.id,
            check: this.props.questionAll.answer===e.currentTarget.id?true:false // ตรวจถูกผิดตรงนี้ได้เลย  ไม่ต้องส่งไปตรวจเซิร์ฟเวอร์ เปลืองโหลด
        }
        this.props.nextQuestion(data)
    }

    render() {
        let s1,s2,s3,s4 = { color : '#627498' }
        if(this.props.questionAll.reply === '1'){
            s1 = {color:'#b7996c'}
            s2 = {color:'#627498'}
            s3 = {color:'#627498'}
            s4 = {color:'#627498'}
        }else if(this.props.questionAll.reply === '2'){
            s1 = {color:'#627498'}
            s2 = {color:'#b7996c'}
            s3 = {color:'#627498'}
            s4 = {color:'#627498'}
        }
        else if(this.props.questionAll.reply === '3'){
            s1 = {color:'#627498'}
            s2 = {color:'#627498'}
            s3 = {color:'#b7996c'}
            s4 = {color:'#627498'}
        }
        else if(this.props.questionAll.reply === '4'){
            s1 = {color:'#627498'}
            s2 = {color:'#627498'}
            s3 = {color:'#627498'}
            s4 = {color:'#b7996c'}
        }
        else{
            s1 = {color:'#627498'}
            s2 = {color:'#627498'}
            s3 = {color:'#627498'}
            s4 = {color:'#627498'}
        }

        return (
            <ListGroup variant="flush">
                <ListGroup.Item  style={{backgroundColor:"#f9f7f3", color:"#b7996c"}}><span style={{fontWeight:400, fontSize:"20px"}}>ข้อ { this.props.number+1 } { this.props.questionAll.question }</span></ListGroup.Item>
                    <ListGroup.Item  style={{cursor:"pointer", fontWeight:300}} id="1" onClick = { this.mange } action as="div">
                        <span style={s1}>ก. { this.props.questionAll.ch1 }</span>
                    </ListGroup.Item>
                    <ListGroup.Item  style={{cursor:"pointer", fontWeight:300}} id="2" onClick = { this.mange } action as="div">
                        <span style={s2}>ข. { this.props.questionAll.ch2 }</span>
                    </ListGroup.Item>
                    <ListGroup.Item  style={{cursor:"pointer", fontWeight:300}} id="3" onClick = { this.mange } action as="div">
                        <span style={s3}>ค. { this.props.questionAll.ch3 }</span>
                    </ListGroup.Item>
                    <ListGroup.Item  style={{cursor:"pointer", fontWeight:300}} id="4" onClick = { this.mange } action as="div">
                        <span style={s4}>ง. { this.props.questionAll.ch4 }</span>
                    </ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
            </ListGroup>
        );
    }
}

export default ExamList;
