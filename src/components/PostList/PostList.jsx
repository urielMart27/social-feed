import React from "react";
import Post from "../Post/Post";
import initData from "../Data/Data.";
import "./PostList.css";

const PostList = ({ posts = [] }) => {
  const postItems = posts.map((post) => (
    <Post key={post.id} name={post.name} body={post.body} />
  ));
  return (
    <div className="flex-item post-list">
      <h1 className="backround-color">Posts</h1>
      <div>{postItems}</div>
    </div>
  );
};

export default PostList;
