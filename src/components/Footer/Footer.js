import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faFacebook, faYoutube, faInstagram, faPinterest} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="py-2d5 px-5">
      <div className="row">
        <div className="col-4">
          <img className="logo" src="/images/logo.png" alt="" />
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong> 562 Wellington Road , Street 32, San
            Francisco{" "}
          </p>
          <p>
            <strong>Phone:</strong> +01 222 365 /(+91) 01 2345 6789{" "}
          </p>
          <p>
            <strong>Hours</strong> 8h - 19h , Mon - Sat{" "}
          </p>

          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faPinterest} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Whilist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div className="col-4">
          <div className="install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
              <div className="col">
                <img src="/images/pay/app.jpg" alt="" />
              </div>
              <div className="col">
                <img src="/images/pay/play.jpg" alt="" />
              </div>
            </div>
            <p>Secured Payment Gateways</p>
            <img src="/images/pay/pay.png" alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="copyright">
          <p>© 2021 - 2022 Tran Ngoc Lam - HTML CSS Ecommerce Template</p>
        </div>
      </div>
    </footer>
  );
}
