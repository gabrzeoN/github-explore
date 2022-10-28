import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

import { UserContext } from "../contexts/UserContext";

export default function FavoriteButton() {
  const { user, favorites, setFavorites } = useContext(UserContext);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    checkFav();
  }, [user]);

  function checkFav() {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].login === user.login) {
        setIsFav(true);
        return;
      }
    }
    setIsFav(false);
  };

  function addFav() {
    if (isFav) {
      alert("This profile is already one of your favorites!");
      return;
    }
    setFavorites([...favorites, { login: user.login, avatar_url: user.avatar_url }]);
    setIsFav(true);
  }

  return (
    <Container onClick={() => addFav()} isFav={isFav} >
      {
        isFav?
        <StarIcon sx={{ fontSize: 100, color: "yellow" }} />
        :
        <StarOutlineIcon sx={{ fontSize: 50, color: "yellow" }} />
      }
    </Container>
  );
}

const Container = styled.button`
  width: 10%;
  border: 1px solid black;
  border-radius: 0px 0px 50px 50px;
  box-shadow: 1px 0px 150px -42px rgba(0,0,0,0.75) inset;
  ${({isFav})=> { 
    return isFav ? 
    "background-color: var(--favorite-button-active);"
    :
    "background-color: var(--favorite-button);"
  }}
  
`;