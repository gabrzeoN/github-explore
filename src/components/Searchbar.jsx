import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import githubProfile from "../services/githubProfile";
import { UserContext } from "../contexts/UserContext";

export default function Searchbar() {
  const [disabled, setDisabled] = useState(false);
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    try {
      const { data } = await githubProfile.get(username);
      localStorage.setItem("githubexplore_user", JSON.stringify(data));
      setUser({ ...data });
      navigate(`/${data.login}`);
    } catch (error) {
      console.log(error.response.data);
      alert("Profile not found!");
    } finally {
      setDisabled(false);
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Insert a profile"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={disabled}
      />
      <button type="submit">Search</button>
    </Container>
  );
}

const Container = styled.form`
  *{
    font-size: 20px;
    height: 30px;
  }
  input{
    width: 250px;
  }
  button{
    width: 100px;
  }
`;