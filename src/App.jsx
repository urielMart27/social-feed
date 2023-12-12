import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import PostList from "./components/PostList/PostList";

function App() {
  return (
    <div className="App">
      <Header />
      <Post />
    </div>
  );
}

export default App;
