import { useContext } from "react";
import { ModalContainer } from "./Styles/Container.style";
import { FiAlertTriangle } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BMIcontext } from "../Context/BMIcontext";
import { IconGroup } from "./Styles/Modal.style";
const AlertModal = () => {
  const context = useContext(BMIcontext);

  return (
    <ModalContainer>
      <IconGroup>
        <FiAlertTriangle
          style={{ color: "dbe6fd" }}
          size={25}
        ></FiAlertTriangle>
        <AiFillCloseCircle
          style={{ color: "dbe6fd" }}
          size={25}
          onClick={(event) => context.openAlert(event)}
        ></AiFillCloseCircle>
      </IconGroup>

      <p>İsim yada şifre girmedin ??</p>
    </ModalContainer>
  );
};

export default AlertModal;
