import React from "react";
import "animate.css";
import "./team-cards.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const TeamCards = () => {
  return (
    <CardGroup className="cards-group">
      <Card className="first-card">
        <Card.Img   className="card-img" variant="top" src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1660775148~hmac=d70346001b7590f7e681ae52dbb1f5f5" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="second-card">
        <Card.Img className="card-img" variant="top" src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1660775148~hmac=d70346001b7590f7e681ae52dbb1f5f5" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="third-card">
        <Card.Img className="card-img" variant="top" src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1660775148~hmac=d70346001b7590f7e681ae52dbb1f5f5" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default TeamCards;
