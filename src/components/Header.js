import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Context } from "../context/cartContext";

function Header() {
  const { cart } = useContext(Context);

  const numberOfItems = cart.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0);

  return (
    <header className="header">
      <Link to="/">
        <h1>The Online Shop</h1>
      </Link>
      <Link to="/cart" className="cart">
        ({numberOfItems})
        <FontAwesomeIcon icon={solid("cart-shopping")} />
      </Link>
    </header>
  );
}

export default Header;
