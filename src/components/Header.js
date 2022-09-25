import { useContext } from "react";
import { Context } from "../context/cartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function Header() {
  const { cart } = useContext(Context);

  const numberOfItems = cart.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0);

  return (
    <header class="d-flex p-2 bd-highlight align-items-center flex-wrap bg-dark ">
      <div class="p-3 flex-grow-1 ">
        <Link to="/" class="text-decoration-none text-white">
          <h1>One Stop Shop</h1>
        </Link>
      </div>
      <div class="p-3">
        <Link to="/" class="text-decoration-none text-white">
          Home
        </Link>
      </div>
      <div class="p-3">
        <Link to="/cart" class="text-decoration-none text-white">
          Cart ({numberOfItems})
          <FontAwesomeIcon icon={solid("cart-shopping")} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
