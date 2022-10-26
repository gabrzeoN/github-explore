import React, { useState } from "react";
import styled from "styled-components";
import githubProfile from "../services/githubProfile";

export default function Searchbar(){
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDisabled(true);
    try {
      const { data } = await githubProfile.get(username);
      console.log(data)
      setDisabled(false);
    } catch (error: any) {
      console.log(error.response.data);
      setDisabled(false);
    }
}

  return(
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