import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("githubexplore_user")));
  const [repositories, setRepositories] = useState(JSON.parse(localStorage.getItem("githubexplore_repositories")));

  return (
    <UserContext.Provider value={{ user, setUser, repositories, setRepositories }}>
      {children}
    </UserContext.Provider>
  );
}