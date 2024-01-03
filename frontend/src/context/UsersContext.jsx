import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { USERS } from "../GraphQL/Queries";

const UsersContext = createContext();

function UsersDataWrapper(props) {
  const { data } = useQuery(USERS);
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
      setPosts(data.posts);
    }
  }, [data]);

  return (
    <UsersContext.Provider value={{ users, posts }}>
      {props.children}
    </UsersContext.Provider>
  );
}

export { UsersDataWrapper, UsersContext };
