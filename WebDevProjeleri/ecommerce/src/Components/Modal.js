import { useContext } from "react";
import { Context } from "../context/ProductsProvider";
import { AiOutlineClose } from "react-icons/ai";
import { MdFavorite, MdShoppingBasket } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
const Modal = () => {
  const { selected, openModal, addBasket, handleFavorite } =
    useContext(Context);
  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="header">
          <GiClothes size={40}></GiClothes>
          <h1>{selected.name}</h1>
          <AiOutlineClose
            size={25}
            onClick={(e) => openModal(e)}
          ></AiOutlineClose>
        </div>
        <div className="modalDetail">
          <img src={selected.image} alt="" />
          <p>Price {selected.price} ₺</p>
          <div className="modalIcons">
            <MdFavorite
              className="fav"
              onClick={() => handleFavorite(selected)}
              size={30}
            ></MdFavorite>
            <MdShoppingBasket
              className="basket"
              size={30}
              onClick={() => addBasket(selected)}
            ></MdShoppingBasket>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
