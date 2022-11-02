import styled from "styled-components";

import Octocat from "../assets/img/octocat.png";
import Searchbar from "./Searchbar";

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
  background-color: var(--header-background);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100vw;
  position: fixed;
  top: 0px;
  z-index: 1;
  box-shadow: -2px 10px 26px -2px rgba(0,0,0,0.75);
  -webkit-box-shadow: -2px 10px 26px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: -2px 10px 26px -2px rgba(0,0,0,0.75);
  user-select: none;
`;

const Logo = styled.div`
  position: absolute;
  left: 10%;
  display: flex;
  align-items: center;
  img{
    height: 70px;
  }
  h1{
    font-size: 30px;
  }
`;
