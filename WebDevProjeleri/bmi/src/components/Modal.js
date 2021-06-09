import { useContext } from "react";
import { BMIcontext } from "../Context/BMIcontext";
import { ModalContainer } from "./Styles/Container.style";
import { AiFillCloseCircle } from "react-icons/ai";
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

      <div>Sonuç : {results[results.length - 1].bmi}</div>
    </ModalContainer>
  );
};

export default Modal;
