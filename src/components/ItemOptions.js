import { useState, useContext } from "react";
import { Context as CartContext } from "../context/cartContext";

function ItemOptions({ id, title, price, src }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setQuantity(e.target.valueAsNumber);
        }}
        value={quantity}
      />
      <button
        className="button"
        onClick={() => {
          addToCart({ id, title, quantity, price, src });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ItemOptions;
