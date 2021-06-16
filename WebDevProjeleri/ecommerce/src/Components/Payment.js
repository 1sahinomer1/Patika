import React, { useContext } from "react";
import { Context } from "../context/ProductsProvider";
import BasketItem from "./BasketItem";

const Payment = () => {
  const { basket, total } = useContext(Context);
  return (
    <div>
      {basket && (
        <div className="baskets">
          {basket.map((clothes) => {
            return <BasketItem product={clothes}></BasketItem>;
          })}
        </div>
      )}

      <div className="totalScreen">
        <p className="totalPrice">Total Price : {total} ₺</p>
      </div>
    </div>
  );
};

export default Payment;
