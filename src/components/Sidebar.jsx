import styled from "styled-components";
import StarIcon from '@mui/icons-material/Star';
import Profiles from "./Profiles";

export default function Sidebar() {
  return (
    <Container>
      <Title>
        <StarIcon sx={{ fontSize: 30, marginTop: 2, color: "#ffff00" }} />
        <h2>FAVORITES</h2>
      </Title>
      <Profiles />
    </Container>
  );
}

const Container = styled.section`
  background-color: var(--sidebar-background);
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  box-shadow: -12px 9px 34px -2px rgba(0,0,0,0.75);
  user-select: none;
  overflow-y: auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    margin-left: 10px;
    font-size: 30px;
    display: flex;
    margin-top: 20px;
    text-decoration: underline;
  }
`;