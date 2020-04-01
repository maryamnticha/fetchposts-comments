import React from "react";
import "./App.css";
import axios from "axios";
import Home from "./component/Home";
import PostList from "./component/PostList";
import CommentList from "./component/CommentList";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    users: [],
    posts: [],
    comments: []
  };
  fetchUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ users: res.data }))
      .catch(error => console.log(error));
  };
  fetchPosts = userId => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(res => this.setState({ posts: res.data }))
      .catch(error => console.error(error));
  };
  fetchComments = postId => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(res => this.setState({ comments: res.data }))
      .catch(error => console.error(error));
  };
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={Home}></Route>
        <Route
          exact
          path="/posts/userId=:id"
          render={props => (
            <PostList
              {...props}
              posts={this.state.posts}
              fetchPosts={this.fetchPosts}
            />
          )}
        />
        <Route
          exact
          path="/comments/postId=:id"
          render={props => (
            <CommentList
              {...props}
              comments={this.state.comments}
              fetchComments={this.fetchComments}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}
export default App;
