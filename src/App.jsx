import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import PostList from "./components/PostList/PostList";
import initData from "./components/Data/Data.";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <CreatePostForm />
        <PostList posts={initData} />
      </div>
    </div>
  );
}

export default App;
