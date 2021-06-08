import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Styles/Button.style";
import { ResultNavContainer } from "./Styles/Container.style";
import { AiFillHome, AiFillFolderOpen } from "react-icons/ai";
import { A } from "./Styles/A.style";
const ResultNav = () => {
  return (
    <ResultNavContainer>
      <Link to="/">
        <A>
          <AiFillHome size={25} />
        </A>
      </Link>
      <Link to="/result">
        <A>
          <AiFillFolderOpen size={25} />
        </A>
      </Link>
    </ResultNavContainer>
  );
};

export default ResultNav;
