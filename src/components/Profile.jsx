import githubProfile from "../services/githubProfile";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Profile({ favorite }){
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function goToProfile() {
    try {
      const { data } = await githubProfile.get(favorite.login);
      localStorage.setItem("githubexplore_user", JSON.stringify(data));
      setUser({ ...data });
      navigate(`/${data.login}`);
    } catch (error) {
      console.log(error.response.data);
      alert("Profile not found!");
    }
  }

  return(
    <Container onClick={() => goToProfile()}>
      <Avatar src={favorite.avatar_url} alt="favorite_profile" />
      <Username>{favorite.login}</Username>
      <Detail ></Detail>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--favorite-button);
  width: 250px;
  height: 100px;
  margin-top: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
  box-shadow: 1px 0px 66px -6px rgba(0,0,0,0.75) inset;
  border-radius: 5px;
`;

const Avatar = styled.img`
  margin-left: 15px;
  width: 55px;
  height: 55px;
  border-radius: 15px;
`;

const Username = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;

const Detail = styled.div`
  width: 25px;
  height: 100%;
  background-color: var(--favorite-button-active);
  border-radius: 0px 5px 5px 0px;
`;
