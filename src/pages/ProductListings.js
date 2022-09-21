// import { useState, useEffect } from "react";
import Card from "../components/Card";

function ProductListings({ productsList }) {
  return (
    <div className="grid-container">
      {productsList.map((product) => {
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
