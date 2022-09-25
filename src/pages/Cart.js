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
    <div class="m-4">
      <h2>Your Items:</h2>
      <table class="table m-0">
        <thead class="bg-primary text-white">
          <tr>
            <th class="col-2">Product</th>
            <th class="col-4">Description</th>
            <th class="col-1 text-center">Quanity</th>
            <th class="col-1 text-center">Price</th>
            <th class="col-1 text-center">Subtotal</th>
            <th class="col-1 text-center">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id} class="column">
                <td>
                  <img
                    src={product.src}
                    alt="product"
                    class="img-fluid w-25"
                  ></img>
                </td>
                <td class="align-middle">
                  <h6 class="w-100">{product.title}</h6>
                </td>
                <td class="text-center align-middle">
                  <h6>{product.quantity}</h6>
                </td>
                <td class="text-center align-middle">
                  <h6>${product.price}</h6>
                </td>
                <td class="text-center align-middle">
                  <h6>${(product.quantity * product.price).toFixed(2)}</h6>
                </td>
                <td class="text-center align-middle">
                  <button
                    class="btn btn-danger"
                    onClick={() => {
                      removeFromCart({ product });
                    }}
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
          <tr class="bg-primary text-white">
            <th class="col-2"></th>
            <th class="col-4"></th>
            <th class="col-1 text-center"></th>
            <th class="col-1 text-center">Grand Total:</th>
            <th class="col-1 text-center">${totalCartPrice.toFixed(2)}</th>
            <th class="col-1 text-center"></th>
          </tr>
        </tbody>
      </table>
      <div class="d-flex flex-row-reverse">
        <button class="btn btn-lg btn-warning m-3" onClick={navigateToCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
