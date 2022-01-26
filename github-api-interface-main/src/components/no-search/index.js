import React from "react";
import * as S from "./styled"; 
import useGithub from "../../hooks/github-hooks";

const NoSearch = () => {


  const {githubState} = useGithub();

   const verifyUser = () => {
    if(githubState.hasUser === false){
      return 'Nome de usuário não existe, tente outro.';
    }
  }

  return (
    <S.Wrapper>
       {verifyUser()}
    </S.Wrapper>
  );
};

export default NoSearch;
