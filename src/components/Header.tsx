import styled from "styled-components";

import Octocat from "../assets/img/octocat.png";
// const Octocat = require("../assets/img/octocat.png");

export default function Header(){
  return(
    <Container>
      <Logo>
        <img src={Octocat} alt="logo" />
        <h1>GITHUB EXPLORE</h1>
      </Logo>
      <Searchbar></Searchbar>
    </Container>
  );
}

const Container = styled.header`
  background-color: #1c3850;
  display: flex;
  height: 100px;
  width: 100vw;
  position: fixed;
  top: 0px;
  z-index: 1;
`;

const Logo = styled.div`
  display: flex;
  img{
    height: 70px;
  }
`;

const Searchbar = styled.div`

`;