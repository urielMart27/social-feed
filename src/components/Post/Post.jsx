import React, { useState } from "react";

const Post = ({ name, body }) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
