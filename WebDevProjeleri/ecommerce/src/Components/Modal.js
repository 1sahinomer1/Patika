import { useContext } from "react";
import { Context } from "../context/ProductsProvider";

const Modal = () => {
  const { selected } = useContext(Context);
  return (
    <div className="modal">
      <h1>modal</h1>
      <p>{selected.name}</p>
    </div>
  );
};

export default Modal;
