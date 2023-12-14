import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import PostList from "./components/PostList/PostList";
import initData from "./components/Data/Data.";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";

function App() {
  const [posts, setPosts] = useState(initData);

  const handleNewPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
  };
  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <CreatePostForm OnNewPost={handleNewPost} />
        <PostList className="post" posts={posts} />
      </div>
    </div>
  );
}

export default App;
