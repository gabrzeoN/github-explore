import styled from "styled-components";
import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import Profile from "./Profile";

export default function Profiles() {
  const { user, favorites, setFavorites } = useContext(UserContext);

  function removeFav() {
    const newFav = favorites?.filter((fav) => {
      if(fav.login !== user.login) return true;
    });
    setFavorites([...newFav]);
    console.log(newFav);
  }

  return (
    <Container>
      {
        favorites.length === 0 ?
          <h1>No favorites yet!</h1>
          :
          favorites.map((fav, i) => {
            return <Profile key={i} favorite={fav} removeFav={removeFav} />
          })
      }
    </Container>
  );
}

const Container = styled.div`
  width: 250px;
`;