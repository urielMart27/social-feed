import React, { useState } from "react";
import "./CreatePostForm.css";

const CreatePostForm = ({ OnNewPost }) => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      body,
    };
    OnNewPost(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      <div className="flex-item backround-color">
        <label className="backround-color">Name</label>
        <input
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label className="backround-color">
          Post
          <br />
          <input
            className="post-input"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <button className="create-post-form button" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreatePostForm;
