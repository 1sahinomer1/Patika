import CalculateBmi from "./CalculateBmi";
import Result from "./Result";
import { LayoutContentContainer } from "./Styles/Container.style";

const Form = () => {
  return (
    <LayoutContentContainer>
      <h3>Calculate your BMI</h3>
      <CalculateBmi></CalculateBmi>
      <Result />
    </LayoutContentContainer>
  );
};

export default Form;
