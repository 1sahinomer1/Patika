import { useContext } from "react";
import { Context } from "../context/ProductsProvider";
import { FaHeartBroken } from "react-icons/fa";
import { MdShoppingBasket } from "react-icons/md";
const Favorited = ({ favorited }) => {
  const { removeFavorite } = useContext(Context);

  return (
    <div className="favorited">
      <>
        <img src={favorited.image} alt="" />
      </>
      <div className="favoriteDetail">
        <>
          <FaHeartBroken
            className="brokeHeart"
            size={30}
            onClick={() => removeFavorite(favorited)}
          ></FaHeartBroken>
        </>
        <div className="info">
          <p className="title">{favorited.name}</p>
          <p>{favorited.price} ₺</p>
        </div>
        <>
          <MdShoppingBasket className="basket" size={30}></MdShoppingBasket>
        </>
      </div>
    </div>
  );
};

export default Favorited;
