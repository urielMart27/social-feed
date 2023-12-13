import React, { useState } from "react";
import "./Post.css";

const Post = ({ name, body }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  console.log(liked);

  const handleLike = (e) => {
    setLiked(true);
    setDisliked(false);
  };

  const handleDislike = (e) => {
    setLiked(false);
    setDisliked(true);
  };

  const likedClass = liked ? "active-like" : "";
  const dislikedClass = disliked ? "active-dislike" : "";

  return (
    <div className="post-item">
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <p>{body}</p>
      </div>
      <div>
        <button className={likedClass} onClick={handleLike}>
          Like
        </button>
        <button className={dislikedClass} onClick={handleDislike}>
          Dislike
        </button>
      </div>
    </div>
  );
};

export default Post;
