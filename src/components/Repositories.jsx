import styled from "styled-components";
import { useEffect, useContext, useState } from "react";

import githubRepo from "../services/githubRepo";
import { UserContext } from "../contexts/UserContext";
import Repository from "./Repository";
import { useParams } from "react-router-dom";

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const { user } = useParams();

  useEffect(() => {
    loadRepositories();
  }, [user]);

  async function loadRepositories() {
    try {
      const { data } = await githubRepo.get(user);
      setRepositories([...data]);
    } catch (error) {
      console.log(error.response.data);
      alert("Profile not found!");
    }

  }

  return (
    <>
      {
        repositories ?
          repositories.map((repo, i) => {
            return <Repository key={i} />
          })
          :
          <h1>Não ha repositorio</h1>
      }
    </>
  );
}