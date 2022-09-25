function NavBar({ categories, filterProducts, resetProductsList }) {
  return (
    <nav>
      <div class="d-flex p-1 bd-highlight justify-content-center align-items-center flex-wrap bg-secondary ">
        <button key="all" class="btn btn-light m-2" onClick={resetProductsList}>
          ALL
        </button>
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              class="btn btn-light m-2 text-uppercase"
              onClick={() => filterProducts({ category })}
            >
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default NavBar;
