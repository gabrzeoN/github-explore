import styled from "styled-components";
import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import Repository from "./Repository";

export default function Repositories(){
  const { repositories} = useContext(UserContext);
  return(
    <>
      {repositories.map((repo) => {
        return <Repository/>
      })}
    </>
  );
}