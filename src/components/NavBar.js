// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { Context } from "../context/cartContext";

// function NavBar() {
//   const { cart } = useContext(Context);

//   const numberOfItems = cart.reduce((prev, current) => {
//     return prev + current.quantity;
//   }, 0);

//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/cart">
//         Cart ({numberOfItems})
//         <FontAwesomeIcon icon={solid("cart-shopping")} />
//       </Link>
//     </nav>
//   );
// }

// export default NavBar;
