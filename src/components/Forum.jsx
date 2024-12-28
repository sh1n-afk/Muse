import React, { useState } from "react";
import "../styles/Forum.css";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  // Function to handle adding a new post
  const handlePost = () => {
    if (newPost.trim()) {
      setPosts([...posts, newPost]);
      setNewPost("");
    }
  };

  return (
    <div className="forum-container">
      <h2>Community Forum</h2>
      <textarea
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="Write something..."
        className="forum-textarea"
      ></textarea>
      <button onClick={handlePost} className="forum-button">
        Post
      </button>
      <div className="forum-posts">
        {posts.map((post, index) => (
          <div key={index} className="forum-post">
            {post}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
