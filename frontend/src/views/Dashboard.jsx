import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { USERS } from "../GraphQL/Queries";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { error, loading, data } = useQuery(USERS);
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
      setPosts(data.posts);
    }
  }, [data]);
  return (
    <div>
      <h1>All users in our DB</h1>
      {users &&
        users.map((user, i) => {
          return (
            <div key={i}>
              <Link to="/user/detail">
                ID {user.id} - Name: {user.name}
              </Link>
            </div>
          );
        })}
      <h2>All posts in our DB</h2>
      {posts &&
        posts.map((post, i) => {
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
