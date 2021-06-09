import { Link } from "react-router-dom";

import { ResultNavContainer } from "./Styles/Container.style";
import { AiFillHome, AiFillFolderOpen } from "react-icons/ai";
import { ATag } from "./Styles/A.style";
const ResultNav = () => {
  return (
    <ResultNavContainer>
      <Link to="/">
        <ATag>
          <AiFillHome size={25} />
        </ATag>
      </Link>
      <Link to="/result">
        <ATag>
          <AiFillFolderOpen size={25} />
        </ATag>
      </Link>
    </ResultNavContainer>
  );
};

export default ResultNav;
