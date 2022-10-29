import styled from "styled-components";
import { useContext, useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';

import FavoriteButton from "./FavoriteButton";
import { UserContext } from "../contexts/UserContext";

export default function UserInfo() {
  const { user } = useContext(UserContext);
  const { name, login, avatar_url, location, bio, followers, following, public_repos } = user;


  return (
    <Container>
      <Avatar src={avatar_url} alt="avatar" />
      <Infos>
        <h2>Welcome to {name}'s profile</h2>
        <Login>{login}</Login>
        <Location>
          <LocationOnIcon/>
          <h3>{location}</h3>
        </Location>
        <Bio>{bio}</Bio>
        <Additionals>
          <Follow>
            <PeopleIcon/>
            <h4>followers: {followers}  - following: {following}</h4>
          </Follow>
          <Repo>
            <MenuBookIcon/>
            <h4>public repositories: {public_repos}</h4>
          </Repo>
        </Additionals>
      </Infos>
      <FavoriteButton/>
    </Container>
  );
}

const Container = styled.section`
  background-color: var(--user-infos-background);
  width: 80%;
  border-radius: 0px 0px 50px 50px;
  padding: 20px;
  display: flex;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 30%;
`;

const Infos = styled.div`
  width: 60%;
  padding: 0px 20px;
  position: relative;
  *{
    font-size: 30px;
    margin-top: 20px;
  }
  h1{
    font-size: 50px;
    font-weight: bold;
  }
  h2{
    font-style: italic;
    text-decoration: underline;
  }
  h3{
    font-size: 20px;
  }
`;

const Login = styled.h1`
  
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  h3{
    margin-left: 10px;
  }
`;

const Bio = styled.p`
  
`;

const Follow = styled.div`
  display: flex;
  align-items: center;
  h4{
    margin-left: 10px;
  }
`;

const Repo = styled.div`
  display: flex;
  align-items: center;
  h4{
    margin-left: 10px;
  }
`;

const Additionals = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  position: absolute;
  bottom: 20px;
  *{
    font-weight: bold;
    font-size: 20px;
  }
`;

