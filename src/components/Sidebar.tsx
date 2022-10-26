import styled from "styled-components";

export default function Sidebar(){
  return(
    <Container>
      <Title>FAVORITES</Title>

    </Container>
  );
}

const Container = styled.section`
  background-color: #366e9f;
  width: 300px;
  display: flex;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
`;

const Title = styled.h1`
  display: flex;
  img{
    width: 100px;

  }
`;
