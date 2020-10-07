import React from "react";
import "./checkout-product.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkout-product">
      <img className="checkout-product__image" src={image} />
      <div className="checkout-product__info">
        <p className="checkout-product__title">{title}</p>
        <p className="checkout-product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
