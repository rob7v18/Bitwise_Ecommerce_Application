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
    <div class="d-flex">
      <div class="row">
        <div class="col-lg-5 col-md-6 col-sm-6 p-5">
          <img src={product.image} alt={product.title} class="img-responsive" />
        </div>
        <div class="col-7 p-5">
          <h1 class="pb-2">{product.title}</h1>
          <h2>Price: ${product.price}</h2>

          <h4 class="pt-5">Description: {product.description}</h4>
          <ItemOptions
            src={product.image}
            id={product.id}
            title={product.title}
            price={product.price}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
