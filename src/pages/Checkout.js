import React, { useContext } from "react";
import { Context } from "../context/cartContext";

function Checkout() {
  const { totalCartPrice } = useContext(Context);
  const { resetCart } = useContext(Context);

  return (
    <div class="d-flex flex-column align-items-center m-5">
      <div>
        <h1>Payment Details</h1>
        <section class="mt-3 mb-5 ms-5">
          <h4>Your Order:</h4>
          <h6 class="mt-3 ms-5">Subtotal: ${totalCartPrice.toFixed(2)}</h6>
          <h6 class="ms-5">Shipping: Free</h6>
          <h4 class="mt-3 ms-5">Total: ${totalCartPrice.toFixed(2)}</h4>
        </section>

        <form>
          <div>
            <h2>Shipping Address</h2>
            <div class="d-flex">
              <section class="col-5 me-4">
                <label for="first name">First Name</label>
                <input type="text" class="form-control"></input>
              </section>
              <section class="col-5">
                <label for="last name">Last Name</label>
                <input type="text" class="form-control"></input>
              </section>
            </div>
            <section class="mt-2 mb-2 col-10">
              <label for="last name">Address</label>
              <input type="text" class="form-control"></input>
            </section>
            <div class="d-flex">
              <section class="col-4 me-4">
                <label for="city">City</label>
                <input type="text" class="form-control"></input>
              </section>
              <section class="col-3 me-4">
                <label for="state">State</label>
                <input type="text" class="form-control"></input>
              </section>
              <section class="col-2">
                <label for="zip code">Zip Code</label>
                <input type="text" class="form-control"></input>
              </section>
            </div>
          </div>

          <div>
            <h2 class="mt-5">Card Information</h2>
            <section class="col-10 me-4">
              <label for="card number">Card Number</label>
              <input type="text" class="form-control"></input>
            </section>
            <section class="mt-2 mb-2 col-10">
              <label for="name on card">Name</label>
              <input type="text" class="form-control"></input>
            </section>
            <div class="d-flex">
              <section class="mt-2 me-4 mb-2 col-4">
                <label for="expiration date">Expiration Date</label>
                <input type="date" class="form-control"></input>
              </section>
              <section class="mt-2 mb-2 col-4">
                <label for="security code">Security Code</label>
                <input type="text" class="form-control"></input>
              </section>
            </div>
          </div>

          <div class="mb-5 justify-content-start d-flex">
            <button
              class="mt-4 w-75 btn btn-lg btn-warning"
              id="complete-payment"
              onClick={(e) => {
                e.preventDefault();
                resetCart();
              }}
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
