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
      <div className="inner-container">
        <h4 className="inner-container">{name}</h4>
      </div>
      <div>
        <p className="inner-container">{body}</p>
      </div>
      <div className="inner-container">
        <button className={`${likedClass} button-color`} onClick={handleLike}>
          Like
        </button>
        <button
          className={`${dislikedClass} button-color`}
          onClick={handleDislike}
        >
          Dislike
        </button>
      </div>
    </div>
  );
};

export default Post;
