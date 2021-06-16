import React, { useContext } from "react";
import { MdFavorite, MdShoppingBasket } from "react-icons/md";
import { Context } from "../context/ProductsProvider";

const Product = ({ product }) => {
  const { addFavorite, addBasket, openModal } = useContext(Context);

  const handleFavorite = (product) => {
    addFavorite(product);
  };

  return (
    <div className="product">
      <>
        <img src={product.image} alt="" onClick={(e) => openModal(product)} />
      </>
      <div className="detail">
        <>
          <MdFavorite
            className="fav"
            onClick={() => handleFavorite(product)}
            size={30}
          ></MdFavorite>
        </>
        <div className="info">
          <p className="title">{product.name}</p>
          <p>{product.price} ₺</p>
        </div>
        <>
          <MdShoppingBasket
            className="basket"
            size={30}
            onClick={() => addBasket(product)}
          ></MdShoppingBasket>
        </>
      </div>
    </div>
  );
};

export default Product;
