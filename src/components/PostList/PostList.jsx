import React from "react";
import Post from "../Post/Post";
import initData from "../Data/Data.";

const PostList = ({ posts = [] }) => {
  const postItems = posts.map((post) => (
    <Post key={post.id} name={post.name} body={post.body} />
  ));
  return (
    <div className="flex-item">
      <h1>Posts</h1>
      <div>{postItems}</div>
    </div>
  );
};

export default PostList;
