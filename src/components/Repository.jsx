import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Repository({ repository }) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    name,
    description,
    forks_count,
    stargazers_count,
    html_url,
    created_at,
  } = repository


  console.log(repository);
  return (
    <Container>
      {
        isOpen ?
          <Open onClick={() => setIsOpen(false)}>
            <h1>{name}</h1>
            <p>{description}</p>
            <div>
              <p>forks: {forks_count}</p>
              <p>stars: {stargazers_count}</p>
            </div>
            <p>created at: {created_at.split("-")[1]}/{created_at.split("-")[0]}</p>
            <a href={html_url} target="_blank" >{html_url}</a>
          </Open>
          :
          <Close onClick={() => setIsOpen(true)}>
            <h1>{name}</h1>
          </Close>
      }
    </Container>
  );
}

const Container = styled.div`
  *{
    width: 100%;
    margin: 15px 0px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1{
    font-size: 40px;
  }
`;

const Open = styled.div`
  background-color: var(--repository-opened);
  box-shadow: 1px 0px 150px -42px rgba(0,0,0,0.75) inset;
  justify-content: flex-start;
  p{
    font-size: 20px;
    font-weight: bold;
  }
  div{
    display: flex;
    flex-direction: row;
  }
  a{
    background-color: #614786;
    height: 30px;
    width: 80%;
    font-size: 15px;
    margin-bottom: 40px;
    font-weight: bold;
  }
`;

const Close = styled.div`
  background-color: var(--repository-closed);
  height: 100px;
  box-shadow: 1px 0px 150px -6px rgba(0,0,0,0.75);
  
`;