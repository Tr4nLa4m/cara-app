import { NavLink } from "react-router-dom";
import "./header.css";
import { faBagShopping , faXmark, faOutdent} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export default function Header() {

  const [activeHover, setActiveHover] = useState("active");
  return (
    // Header Start
    <section id="header">
      <NavLink to="/" >
        <img src='/images/logo.png' className="logo" alt="logo" />
      </NavLink>

      <div>
        <ul id="navbar">
          <li>
            <NavLink to="/" className={(navData) => (navData.isActive ? "active" : 'none')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={(navData) => (navData.isActive ? "active" : 'none')}>Shop</NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={(navData) => (navData.isActive ? "active" : 'none')}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={(navData) => (navData.isActive ? "active" : 'none')}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={(navData) => (navData.isActive ? "active" : 'none')}>Contact</NavLink>
          </li>
          <li id="lg_bag">
            <NavLink to="/cart" className={(navData) => (navData.isActive ? "active" : 'none')}>
              <FontAwesomeIcon icon={faBagShopping} />
            </NavLink>
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
