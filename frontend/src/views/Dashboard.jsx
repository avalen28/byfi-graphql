import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUsersContext } from "../hooks/useUsersContext";

const Dashboard = () => {
  const { users, posts } = useUsersContext();
  const [usersFromContext, setUsersFromContext] = useState(null);
  const [postsFromContext, setPostsFromContext] = useState(null);

  useEffect(() => {
    if (users && posts) {
      setUsersFromContext(users);
      setPostsFromContext(posts);
    }
  }, [users, posts]);

  return (
    <div>
      <h1>All users in our DB</h1>
      {usersFromContext &&
        usersFromContext.map((user, i) => {
          return (
            <div key={i}>
              <Link to="/user/detail">
                ID {user.id} - Name: {user.name}
              </Link>
            </div>
          );
        })}
      <h2>All posts in our DB</h2>
      {postsFromContext &&
        postsFromContext.map((post, i) => {
          return (
            <div key={i}>
              <Link to="/post/detail">
                ID {post.id} - Title: {post.title}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Dashboard;
