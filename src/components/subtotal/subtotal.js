import { ShoppingBasket } from "@material-ui/icons";
import React from "react";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
