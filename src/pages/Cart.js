import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/cartContext";

function Cart() {
  const { cart } = useContext(Context);
  const { removeFromCart } = useContext(Context);
  let { totalCartPrice } = useContext(Context);

  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      {cart.map((product) => {
        return (
          <div className="cart-item" key={product.id}>
            <img src={product.src} alt="product"></img>
            <section>
              <h5>{product.title}</h5>
              <h5>{`Quanity: ${product.quantity}`}</h5>
              <h5>{`Price: $${product.quantity * product.price}`}</h5>
            </section>
            <button
              className="remove-button"
              onClick={() => {
                removeFromCart({ product });
              }}
            >
              Remove Item
            </button>
          </div>
        );
      })}

      <div>GRAND TOTAL: ${totalCartPrice.toFixed(2)} </div>
      <button className="button" onClick={navigateToCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;
