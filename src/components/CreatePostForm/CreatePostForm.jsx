import React, { useState } from "react";

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
    <form onSubmit={handleSubmit} className="flex-item">
      <div className="flex-item">
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>
          Post
          <input value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default CreatePostForm;
