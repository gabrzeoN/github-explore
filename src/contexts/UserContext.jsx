import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("githubexplore_user")));
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("githubexplore_favorites"));
    if(favs){
      setFavorites([...favs])
    }
  }, []);

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