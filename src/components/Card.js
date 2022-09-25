import { Link } from "react-router-dom";

function Card({ id, image, title, price }) {
  return (
    <div class="col-sm-6 col-md-4 col-lg-3 p-2 ">
      <Link to={`/${id}`} class="p-2 text-decoration-none text-dark">
        <div class="card p-3 w-100 h-100 d-flex justify-content-center align-items-center ">
          <img src={image} alt={title} style={{ width: 220, height: 250 }} />
          <div class="row">
            <p class="col-12-text-truncate m-2 p-3">{title}</p>
          </div>
          <div class="p-2 ">
            <h5 class=" fw-bolder text-reset">Price: ${price.toFixed(2)}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
