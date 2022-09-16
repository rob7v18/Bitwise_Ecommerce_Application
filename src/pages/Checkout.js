import React, { useContext } from "react";
import { Context } from "../context/cartContext";

function Checkout() {
  const { totalCartPrice } = useContext(Context);
  const { resetCart } = useContext(Context);

  return (
    <div>
      <h1>Payment form</h1>
      <h4>Total: ${totalCartPrice.toFixed(2)}</h4>

      <form action="#" method="post">
        <h2>Shipping Address</h2>
        <section>
          <label>First Name</label>
          <input></input>

          <label>Last Name</label>
          <input></input>
        </section>

        <section>
          <label>Address</label>
          <input></input>
        </section>

        <section>
          <label>City</label>
          <input></input>
          <label>State</label>
          <input></input>
          <label>ZIP code</label>
          <input></input>
        </section>

        <h2>Card Information</h2>
        <section>
          <label>Card number</label>
          <input></input>
        </section>

        <section>
          <label>Name on card</label>
          <input></input>
        </section>

        <section id="cc-exp-csc">
          <div>
            <label>Expiry date</label>
            <input></input>
          </div>
          <div>
            <label>Security code</label>
            <input></input>

            <div className="explanation">Last 3 digits on back of card</div>
          </div>
        </section>

        <button
          id="complete-payment"
          onClick={(e) => {
            e.preventDefault();
            resetCart();
          }}
        >
          Complete payment
        </button>
      </form>
    </div>
  );
}

export default Checkout;
