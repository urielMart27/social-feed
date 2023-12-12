import React from "react";
import Post from "../Post/Post";
import initData from "../Data/Data.";

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Post name={post.name} body={post.body} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
