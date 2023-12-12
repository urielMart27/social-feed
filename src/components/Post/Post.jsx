import React, { useState } from "react";

const Post = ({ name, body }) => {
  const [liked, setLiked] = useState(false);

  const ToggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <p>{body}</p>
      </div>
      <div>
        <button onClick={ToggleLike}></button>
      </div>
    </div>
  );
};

export default Post;
