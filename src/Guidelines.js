import React, { Component } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Table from 'react-bootstrap/Table'

export default class Guidlines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`./getGuideline.php`)
            .then(res => {

                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map((pd,index) => 
                
                    <React.Fragment key={index}>
                        <tr>
                            <td>{pd.topic}</td>
                            <td className="text-center"><a href={pd.link} target="_blank" rel="noopener noreferrer">รายละเอียด</a></td>
                        </tr>
                    </React.Fragment>
                )


                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <Container className="boxGuidelines">
                <Row>
                    <Col lg="12">
                        <h1 className="topicTop text-center">แนวข้อสอบ</h1>
                        <h5 className="topic_sec">รวบรวมมาจากหลายที่ (ที่แจกฟรี)</h5>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" style={{paddingTop:'50px'}}>
                        <Table striped bordered hover size="sm" style={{color:'#627498'}}>
                            <thead className="text-center">
                                <tr>
                                    <th>หัวข้อ</th>
                                    <th>รายละเอียด</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.postData}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" style={{fontSize:'14px'}}>
                        <ReactPaginate
                            previousLabel={"ก่อนหน้า"}
                            nextLabel={"ถัดไป"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}


// export default Guidlines;
