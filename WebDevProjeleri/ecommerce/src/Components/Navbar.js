import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import { MdFavorite, MdShoppingBasket } from "react-icons/md";
import { Context } from "../context/ProductsProvider";
const Navbar = () => {
  const { basket } = useContext(Context);
  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <GiClothes size={50} color={"#C9E4CA"}></GiClothes>
      </Link>

      <Link to="/favorite">
        <MdFavorite size={30} color={"#C9E4CA"}></MdFavorite>
      </Link>
      <Link to="/payment">
        <MdShoppingBasket size={30} color={"#C9E4CA"}></MdShoppingBasket>
        <span>{basket.length}</span>
      </Link>
    </div>
  );
};

export default Navbar;
