import styled from "styled-components";

export default function Sidebar(){
  return(
    <Container>
      <Title>FAVORITES</Title>

    </Container>
  );
}

const Container = styled.section`
  background-color: var(--sidebar-background);
  width: 300px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  box-shadow: -12px 9px 34px -2px rgba(0,0,0,0.75);
  -webkit-box-shadow: -12px 9px 34px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: -12px 9px 34px -2px rgba(0,0,0,0.75);
  user-select: none;
`;

const Title = styled.h2`
  display: flex;
  font-size: 30px;
  margin-top: 20px;
  text-decoration: underline;
`;
