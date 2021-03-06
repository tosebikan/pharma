import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpXM3Dkc3qh_gdxmitA0s8FkzHRIhFTAuGqA&usqp=CAU"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
