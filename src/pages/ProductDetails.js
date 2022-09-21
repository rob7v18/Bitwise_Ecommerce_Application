import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemOptions from "../components/ItemOptions";

function ProductDetails() {
  let { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        console.log({ data });
        setProduct(data);
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />

      <ItemOptions
        src={product.image}
        id={product.id}
        title={product.title}
        price={product.price}
      />
    </div>
  );
}

export default ProductDetails;
