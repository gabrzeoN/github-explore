
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import Repositories from "../components/Repositories";

export default function UserPage() {
  return (
    <>
      <Header/>
      <Container>
        <UserPageContent>
          <UserInfo/>
          <Repositories/>
        </UserPageContent>
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

const UserPageContent = styled.div`
  background-color: var(--page-background);
  width: calc(100vw - 300px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`