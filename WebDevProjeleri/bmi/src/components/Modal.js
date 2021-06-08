import { useContext } from "react";
import { BMIcontext } from "../Context/BMIcontext";
import { ModalContainer } from "./Styles/Container.style";
import { AiFillCloseCircle } from "react-icons/ai";
const Modal = () => {
  const context = useContext(BMIcontext);
  return (
    <ModalContainer>
      <AiFillCloseCircle
        style={{ color: "dbe6fd" }}
        onClick={(event) => context.openModal(event)}
      ></AiFillCloseCircle>
      <div>omer babaa</div>
      <div>Sonuç : {context.calculate(context.weight, context.height)}</div>
      <div>
        Sen nesinnnnn :{" "}
        {context.bmi(context.calculate(context.weight, context.height))}
      </div>
    </ModalContainer>
  );
};

export default Modal;
