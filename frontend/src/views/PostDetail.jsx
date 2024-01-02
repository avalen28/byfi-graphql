import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const getPostDetails = async () => {
    try {
      const postFromApi = await axios.get("http://localhost:8080/post/details");
      setPost(postFromApi.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostDetails();
  }, []);
  return (
    <div>
      <Link to="/">Go back</Link>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <h4>{post.body}</h4>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
