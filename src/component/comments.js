import React from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";

const Comments = props => {
  const { name, body } = props.comment;

  return (
    <div className="Cards">
      <Card style={{ width: "25em" }}>
        <Card.Img
          variant="top"
          src={
            "https://i2.wp.com/www.trucsdeblogueuse.com/wp-content/uploads/2017/02/commentaire-de-blog-article-trucs-de-blogueuse.jpg?resize=900%2C450"
          }
        />
        <Card.Title>{name} </Card.Title>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Comments;
