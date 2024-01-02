import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { USERS } from "../GraphQL/Queries";

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
            <h3 key={i}>
              ID {user.id} - Name: {user.name}
            </h3>
          );
        })}
      <h2>All posts in our DB</h2>
      {posts &&
        posts.map((post, i) => {
          return (
            <div>
              <h3>
                ID {post.id} - Title: {post.title}
              </h3>
            </div>
          );
        })}
    </div>
  );
};

export default Dashboard;
