import { ATag } from "./Styles/A.style";
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
        <ATag href="">
          <GiWeightLiftingDown size={25} />
        </ATag>
      </div>

      <div>
        <ATag href="https://github.com/1sahinomer1">
          <AiFillGithub size={25} />
        </ATag>
        <ATag href="https://omersahin.me">
          <BiWorld size={25} />
        </ATag>
        <ATag href="https://www.linkedin.com/in/omersahin1">
          <AiFillLinkedin size={25} />
        </ATag>
        <ATag href="https://1sahinomer1.medium.com">
          <AiFillMediumCircle size={25} />
        </ATag>
      </div>

      <div>
        <ATag href="">
          <GiWeightLiftingUp size={25} />
        </ATag>
      </div>
    </FooterContainer>
  );
};

export default Footer;
