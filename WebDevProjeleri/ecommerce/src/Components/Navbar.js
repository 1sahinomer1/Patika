import React from "react";
import { Link } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import { MdFavorite, MdShoppingBasket } from "react-icons/md";
const Navbar = () => {
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
      </Link>
    </div>
  );
};

export default Navbar;
