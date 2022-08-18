import "./productCard.css";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from "react-router-dom";
import { addToCart } from "../../pages/cart/cartSlice";

export default function ProductCard(prop) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cardProduct = prop.cardProduct;

  const handleNavigate = () => {
    navigate(`../product/${cardProduct.id}`, { replace: true });
  };

  const handleAddToCart = (e) => {
    e.preventDefault();

    dispatch(
      addToCart({
        quantity: 1,
        product: cardProduct,
        size: "L",
      })
    );
  };

  return (
    <div className="col">
      <div className="pro">
        <img
          src={cardProduct.image}
          alt={cardProduct.title}
          title={cardProduct.title}
          onClick={handleNavigate}
        />
        <div className="desc">
          <span>{cardProduct.branch}</span>
          <h5 alt={cardProduct.title}>{cardProduct.title}</h5>
          <div className="start">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h4>${cardProduct.price}</h4>
        </div>

        <div onClick={handleAddToCart}>
          <span className="cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
        </div>
      </div>
    </div>
  );
}
