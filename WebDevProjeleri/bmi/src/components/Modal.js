import { useContext } from "react";
import { BMIcontext } from "../Context/BMIcontext";
import { ModalContainer } from "./Styles/Container.style";
import { AiFillCloseCircle } from "react-icons/ai";
import { H4 } from "./Styles/h3";
const Modal = () => {
  const {
    resultsTotal: { results },
    openModal,
  } = useContext(BMIcontext);

  return (
    <ModalContainer>
      <AiFillCloseCircle
        style={{ color: "dbe6fd" }}
        onClick={(event) => openModal(event)}
      ></AiFillCloseCircle>

      <H4>
        Sonuç : {results[results.length - 1].bmi} You are{" "}
        {results[results.length - 1].bmiResult} !
      </H4>
    </ModalContainer>
  );
};

export default Modal;
