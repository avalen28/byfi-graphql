import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { USERS } from "../GraphQL/Queries";

const AllUsers = () => {
  const { error, loading, data } = useQuery(USERS);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);
  return (
    <div>
      <h1>All users in our DB</h1>
      {users &&
        users.map((user, i) => {
          return <h3 key={i}>{user.name}</h3>;
        })}
    </div>
  );
};

export default AllUsers;
