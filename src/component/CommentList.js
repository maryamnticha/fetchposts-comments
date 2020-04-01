import React, { Component } from "react";
import Comments from "./comments";
export default class CommentList extends Component {
  componentDidMount = () => {
    const ID = this.props.match.params.id;
    this.props.fetchComments(ID);
  };

  render() {
    return (
      <div className="flex">
        <hr className="line"></hr>
        <h1 className="title"> This is the comment List </h1>
        <hr className="line"></hr>
        <div className="Cards">
          {this.props.comments.map((comment, key) => (
            <div>
              <Comments className="Cardes" comment={comment} key={key} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
