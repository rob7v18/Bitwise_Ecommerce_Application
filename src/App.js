import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Cart, Checkout, ProductDetails, ProductListings } from "./pages";
import { Context } from "./context/cartContext";
import Header from "./components/Header";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    (async function () {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      const productsList = data.map((product) => {
        return product;
      });
      const categories = productsList.map((product) => {
        return product.category;
      });
      setCategories(categories);
      setAllProducts(productsList);
      setProductsList(productsList);
    })();

    return () => {};
  }, []);

  let totalCartPrice = 0;

  {
    cart.map((product) => {
      totalCartPrice += product.price * product.quantity;
      return totalCartPrice;
    });
  }

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
          setCart((cart) =>
            cart.filter((product) => {
              return product.id !== item.product.id;
            })
          );
        },

        resetCart: () => {
          setCart([]);
          navigateToHome();
          setProductsList(allProducts);
        },
      }}
    >
      <div class="bg-light">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <ProductListings
                productsList={productsList}
                allProducts={allProducts}
                categories={categories}
                setProductsList={setProductsList}
              />
            }
          />
          <Route path="/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
