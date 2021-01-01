import React from "react";
import { Card } from "react-bootstrap";


export const Cards = ({img,name,title}) => {
  return (
    <div>
      
      <Card className="my-3 p-3 rounded" style={{width :"15rem"}}>
        <Card.Title as="div">
          <strong>{name}</strong>
        </Card.Title>

        <Card.Img src={img} variant="top" width="200rem" height='200em'/>

        <Card.Body>
          <Card.Title as="div">
            <strong>{title}</strong>
          </Card.Title>
        </Card.Body>
      </Card>
      
      
    </div>
  );
};
