import CalculateBmi from "./CalculateBmi";
import Result from "./Result";
import { H3 } from "./Styles/h3";

const Form = () => {
  return (
    <>
      <H3>Calculate your BMI</H3>
      <CalculateBmi></CalculateBmi>
      <Result />
    </>
  );
};

export default Form;
