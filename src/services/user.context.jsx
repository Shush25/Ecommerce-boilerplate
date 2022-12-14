import React, { useEffect, useState } from "react";

export const UsersContext = React.createContext(null);

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  /* A Simple function which fetches the users  */
  const fetchUser = () => {
    fetch("https://shush-assignment-1.herokuapp.com/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UsersContext.Provider value={{ users, currentUser, setCurrentUser }}>
      {children}
    </UsersContext.Provider>
  );
};
