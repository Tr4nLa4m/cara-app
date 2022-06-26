import { Link } from "react-router-dom";
import "./header.css";
import { faBagShopping , faXmark, faOutdent} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {
  return (
    // Header Start
    <section id="header">
      <Link to="/" >
        <img src={require('../../images/logo.png')} className="logo" alt="logo" />
      </Link>

      <div>
        <ul id="navbar">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products">Shop</Link>
          </li>
          <li>
            <Link to="/blogs" >Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li id="lg_bag">
            <Link to="/cart">
              <FontAwesomeIcon icon={faBagShopping} />
            </Link>
          </li>
          <a href="#" id="close">
            <FontAwesomeIcon icon={faXmark} />
          </a>
        </ul>
      </div>

      <div id="mobile-icon">
        <a href="cart.html">
          <FontAwesomeIcon icon={faBagShopping} />
        </a>
          <FontAwesomeIcon id="bar" icon={faOutdent} />
      </div>
    </section>
    // Header End
  );
}
