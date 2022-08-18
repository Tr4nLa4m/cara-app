import { Fragment } from "react";
import "./contactPage.css";
import {
  faMap,
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Newsletter from "../../components/Newsletter/Newsletter";
import Banner from "../../components/Banner/Banner";

export default function ContactPage() {
  const banner = {
    title: "#let's talk",
    subTitle: "LEAVE A MESSAGE, We love to hear from you!",
    image: "images/about/banner.png",
  };
  return (
    <Fragment>
      {/* Banner Section Start */}
      <section id="banner">
        <Banner.HeadingBanner
          title={banner.title}
          subTitle={banner.subTitle}
          image={banner.image}
        />
      </section>
      {/* Banner Section End */}

      <section id="contact_details" className="py-2d5 px-5">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div className="">
            <li>
              <FontAwesomeIcon icon={faMap} />
              <p>56 Glassford Street Glasgow G1 1UL New York</p>
            </li>

            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>tranlamiter.example@gmail.com</p>
            </li>

            <li>
              <FontAwesomeIcon icon={faPhone} />
              <p>+84/90 332445667</p>
            </li>

            <li>
              <FontAwesomeIcon icon={faClock} />
              <p>Monday to Saturday : 9.00am to 16.00pm </p>
            </li>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6409443025937!2d105.84094731476287!3d21.007025286010126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1653288214934!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form_details">
        <form action="#">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="normal" type="submit">
            Submit
          </button>
        </form>

        <div className="people">
          <div>
            <img src="images/people/1.png" alt="" />
            <p>
              <span>John Doe</span>
              Senior Marketing Manager
              <br />
              Phone: +000 123 456
              <br />
              Email: example@gmail.com
            </p>
          </div>

          <div>
            <img src="images/people/2.png" alt="" />
            <p>
              <span>Willian Smith</span>
              Senior Marketing Manager
              <br />
              Phone: +000 123 456
              <br />
              Email: example@gmail.com
            </p>
          </div>

          <div>
            <img src="images/people/3.png" alt="" />
            <p>
              <span>Emma Stone</span>
              Senior Marketing Manager
              <br />
              Phone: +000 123 456
              <br />
              Email: example@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section Start */}
      <section id="newsletter" className="">
        <Newsletter />
      </section>
      {/* Newsletter Section End */}
    </Fragment>
  );
}
