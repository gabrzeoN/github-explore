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
          <p>Feel free to search for any Github profile</p>
        </HomePageContent>
        <Sidebar />
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  position: relative;
  margin-top: 100px;
  height: calc(100vh - 100px);
`

const HomePageContent = styled.div`
  background-color: var(--page-background);
  width: calc(100vw - 300px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  h1{
    margin-top: 250px;
    font-size: 50px;
    font-weight: bold;
  }
  p{
    margin-top: 20px;
    font-size: 40px;
  }
`