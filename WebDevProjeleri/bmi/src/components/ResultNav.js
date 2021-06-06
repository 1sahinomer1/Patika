import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Styles/Button.style";
import { ResultNavContainer } from "./Styles/Container.style";
const ResultNav = () => {
  return (
    <ResultNavContainer>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/result">
        <Button>My Old Records</Button>
      </Link>
    </ResultNavContainer>
  );
};

export default ResultNav;
