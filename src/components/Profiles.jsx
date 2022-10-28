import styled from "styled-components";
import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import Profile from "./Profile";

export default function Profiles() {
  const { user, favorites, setFavorites } = useContext(UserContext);

  return (
    <Container>
      {
        favorites.length === 0 ?
          <h1>No favorites yet!</h1>
          :
          favorites.map((fav, i) => {
            return <Profile key={i} favorite={fav} />
          })
      }
    </Container>
  );
}

const Container = styled.div`
  width: 250px;
  h1:first-child{
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin-top: 100px;
  }
`;