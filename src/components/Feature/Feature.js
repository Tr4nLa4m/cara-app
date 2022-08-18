import { Fragment } from "react";
import "./feature.css";

export default function Feature(props) {
  const feature = props.feature;

  return (
    <div className="col">
      <div className="fe-box">
        <img src={feature.image} alt={feature.title} />
        <h6 style={{ backgroundColor: feature.backgroundTextColor}}>{feature.title}</h6>
      </div>
    </div>
  );
}
