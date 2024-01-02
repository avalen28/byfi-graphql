import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const getUserDetails = async () => {
    try {
      const userFromApi = await axios.get("http://localhost:8080/user/details");
      setUser(userFromApi.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <Link to="/">Go back</Link>
      {user && (
        <div>
          <h1>{user.username}</h1>
          <h4>Email: {user.email}</h4>
          <h4>
            Address: {user.address.street}, {user.address.city}
          </h4>
          <h4>Phone: {user.phone}</h4>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
