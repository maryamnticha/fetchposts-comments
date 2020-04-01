import React, { Component } from "react";
import PostCard from "./PostCard";
export default class PostList extends Component {
  componentDidMount = () => {
    const ID = this.props.match.params.id;
    this.props.fetchPosts(ID);
  };

  render() {
    return (
      <div className="flex">
        <hr className="line"></hr>
        <h1 className="title"> This is the Post's List </h1>
        <hr className="line"></hr>
        <div className="Cards">
          {this.props.posts.map((post, key) => (
            <div>
              <PostCard className="Cardes" post={post} key={key} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
