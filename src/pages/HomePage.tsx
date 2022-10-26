import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function HomePage() {

  return (
    <>
      <Header/>
      <Container>
        <HomePageContent>
          <h1>Welcome to Github Explore</h1>
          <p>You are free to search for a Github profle</p>
        </HomePageContent>
        <Sidebar />
      </Container>
    </>
  );
}

const Container = styled.section`
  background-color: #4d5962;
  display: flex;
  position: relative;
  margin-top: 100px;
  height: calc(100vh - 100px);
`

const HomePageContent = styled.div`
  
`