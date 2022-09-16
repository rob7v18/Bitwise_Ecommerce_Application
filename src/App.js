import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Cart, Checkout, ProductDetails, ProductListings } from "./pages";
import { Context } from "./context/cartContext";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  let totalCartPrice = 0;

  {
    cart.map((product) => {
      totalCartPrice += product.price * product.quantity;
      return totalCartPrice;
    });
  }

  console.log(totalCartPrice);

  return (
    <Context.Provider
      value={{
        cart,

        totalCartPrice,

        addToCart: function (item) {
          const exist = cart.find((product) => product.id === item.id);

          if (exist) {
            const updateProduct = cart.map((product) =>
              product.id === item.id
                ? { ...product, quantity: product.quantity + item.quantity }
                : product
            );
            setCart(updateProduct);
          } else {
            setCart([
              ...cart,
              {
                ...item,
              },
            ]);
          }
        },

        removeFromCart: (item) => {
          console.log(item.product.id);
          setCart((cart) =>
            cart.filter((product) => {
              return product.id !== item.product.id;
            })
          );
        },

        resetCart: () => {
          console.log("it works");
          setCart([]);
          navigateToHome();
        },
      }}
    >
      <div className="App">
        <Header />
        {/* <NavBar /> */}

        <Routes>
          <Route path="/" element={<ProductListings />} />
          <Route path="/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
