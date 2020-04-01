import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "../component/UserList";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default Home;
