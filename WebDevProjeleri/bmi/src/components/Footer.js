import React from "react";
import { A } from "./Styles/A.style";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FooterContainer } from "./Styles/Container.style";
import { GiWeightLiftingUp, GiWeightLiftingDown } from "react-icons/gi";
const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <A href="">
          <GiWeightLiftingDown size={25} />
        </A>
      </div>

      <div>
        <A href="https://github.com/1sahinomer1">
          <AiFillGithub size={25} />
        </A>
        <A href="https://omersahin.me">
          <BiWorld size={25} />
        </A>
        <A href="https://www.linkedin.com/in/omersahin1">
          <AiFillLinkedin size={25} />
        </A>
        <A href="https://1sahinomer1.medium.com">
          <AiFillMediumCircle size={25} />
        </A>
      </div>

      <div>
        <A href="">
          <GiWeightLiftingUp size={25} />
        </A>
      </div>
    </FooterContainer>
  );
};

export default Footer;
