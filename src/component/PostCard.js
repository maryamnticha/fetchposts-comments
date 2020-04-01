import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const PostCard = props => {
  const { id, title, body } = props.post;

  return (
    <div className="Cards">
      <Card style={{ width: "25em" }}>
        <Card.Img
          variant="top"
          src={
            "https://i0.wp.com/logisticsviewpoints.com/wp-content/uploads/sustainable-supply-chain-graphic.jpg?ssl=1"
          }
        />
        <Card.Title>{title} </Card.Title>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
        <Link to={`/comments/postId=${id}`}>
          <Button> Show Comments</Button>{" "}
        </Link>
      </Card>
    </div>
  );
};
export default PostCard;
