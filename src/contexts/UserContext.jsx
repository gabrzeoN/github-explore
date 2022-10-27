import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("githubexplore_user")));
  const [repo, setRepo] = useState(JSON.parse(localStorage.getItem("githubexplore_repo")));

  return (
    <UserContext.Provider value={{ user, setUser, repo, setRepo }}>
      {children}
    </UserContext.Provider>
  );
}