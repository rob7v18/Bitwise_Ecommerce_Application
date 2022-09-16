import { Link } from "react-router-dom";
import ItemOptions from "./ItemOptions";

function Card({ id, image, title, price }) {
  return (
    <div className="card grid-item">
      <Link to={`/${id}`}>
        <img src={image} alt={title} className="productDetailImage" />
        <p>{title}</p>
        <p>${price}</p>
      </Link>

      <ItemOptions id={id} title={title} src={image} price={price} />
    </div>
  );
}

export default Card;
