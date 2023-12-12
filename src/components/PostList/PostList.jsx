import React from "react";
import Post from "../Post/Post";

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post name={post.name} />
      ))}
    </div>
  );
};

export default PostList;
