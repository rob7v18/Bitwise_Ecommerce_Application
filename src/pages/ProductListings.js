import { useState, useEffect } from "react";
import Card from "../components/Card";

function ProductListings() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log({ data });
      setProducts(data);
    })();

    return () => {};
  }, []);

  return (
    <div className="grid-container">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default ProductListings;
