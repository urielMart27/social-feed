import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import PostList from "./components/PostList/PostList";
import initData from "./components/Data/Data.";

function App() {
  return (
    <div className="App">
      <Header />
      <PostList posts={initData} />
    </div>
  );
}

export default App;
