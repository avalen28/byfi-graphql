import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

export const useUsersContext = () => useContext(UsersContext);
