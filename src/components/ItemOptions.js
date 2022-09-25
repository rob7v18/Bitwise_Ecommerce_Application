import { useState, useContext } from "react";
import { Context as CartContext } from "../context/cartContext";

function ItemOptions({ id, title, price, src }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleClickMinus = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  const handleClickAdd = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  return (
    <div>
      <div class="container flex-wrap d-flex flex-row align-items-center mt-5 mb-5">
        <h2 class="me-5">Quanity: </h2>
        <div>
          <button
            class="btn btn-secondary p-3 pb-2 pt-2"
            onClick={handleClickMinus}
          >
            -
          </button>
          <span class=" p-4 pb-2 pt-2 bg-white">{quantity}</span>
          <button
            class=" btn btn-secondary p-3 pb-2 pt-2"
            onClick={handleClickAdd}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <button
          class="btn btn-lg btn-warning w-50  "
          onClick={() => {
            addToCart({ id, title, quantity, price, src });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemOptions;
