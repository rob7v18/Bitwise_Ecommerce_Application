import Card from "../components/Card";
import NavBar from "../components/NavBar";

function ProductListings({
  productsList,
  allProducts,
  setProductsList,
  categories,
}) {
  const uniqueCategories = [...new Set(categories)];

  const filterProducts = ({ category }) => {
    const updatedList = allProducts.filter(
      (product) => product.category === category
    );
    setProductsList(updatedList);
  };

  const resetProductsList = () => {
    setProductsList(allProducts);
  };

  return (
    <div>
      <NavBar
        categories={uniqueCategories}
        filterProducts={filterProducts}
        resetProductsList={resetProductsList}
      />
      <div class="container-fluid p-4">
        <div class="row">
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
      </div>
    </div>
  );
}

export default ProductListings;
