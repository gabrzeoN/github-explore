import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("githubexplore_user")));
  const [favorites, setFavorites] = useState([]);

  return (
    <UserContext.Provider value={{
        user,
        setUser,
        favorites,
        setFavorites
      }}>
      {children}
    </UserContext.Provider>
  );
}