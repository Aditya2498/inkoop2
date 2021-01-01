import React from "react";
import {  Row, Col } from "react-bootstrap";
import './Header.css';


export const Header = () => {
  return (
    <div className="App-header">
      <Row>
        <Col className="leftcol font" variant='top'>
          <b>
          LOREM 
          IPSUM
 
          </b>
                 </Col>
        <Col style={{ paddingLeft: "10rem" }}>LOrem Ipsum Dolor
        <div><a href=''>Lorem</a>
        <a href=''> Ipsum </a>
        <a href=''> Dolor </a>
        </div>
      
         </Col>
         </Row>
      <Row style={{ padding: "2rem" }}>
        <Col style={{ textAlign: "center" }}>
          <h4>Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
          It is a long established fact that a reader will be distracted by the readable content of a page
           <br />
           <h1>   </h1>
           <div className='border'>
           <button className='button button-font'>Lorem Ipsum</button>
           </div>
        </Col>
      </Row>
    </div>
  );
};
