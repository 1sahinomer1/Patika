import React, { useContext } from "react";
import { Context } from "../context/ProductsProvider";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const BasketItem = ({ product }) => {
  const { addBasket, removeBasket, howMuch } = useContext(Context);
  return (
    <div className="basketItem">
      <div className="left">
        <img src={product.image} alt="" />
      </div>

      <div className="right">
        <h3>{product.name}</h3>
        <p>{product.price} ₺</p>
        <div className="icons">
          <AiOutlinePlus
            className="button"
            size={25}
            onClick={() => addBasket(product)}
          >
            +
          </AiOutlinePlus>
          <AiOutlineMinus
            className="button"
            size={25}
            onClick={() => removeBasket(product)}
          >
            -
          </AiOutlineMinus>
        </div>

        {<p>Selected :{howMuch(product)}</p>}
      </div>
    </div>
  );
};

export default BasketItem;
