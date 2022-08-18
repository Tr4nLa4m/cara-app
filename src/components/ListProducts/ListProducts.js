import { Fragment } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./listProducts.css";

export default function ListProducts(props) {
  const title = props.title;
  const subTitle = props.subTitle;
  const listProducts = props.listProducts;
  return (
    <div className="text-center">
      {title && <h2>{title}</h2>}
      {subTitle && <p>{subTitle}</p>}

      <div className="pro-container d-flex flex-wrap justify-content-between">
        {listProducts.map((cardProduct, index) => {
          return <ProductCard cardProduct={cardProduct} key={index} />;
        })}
      </div>
    </div>
  );
}
