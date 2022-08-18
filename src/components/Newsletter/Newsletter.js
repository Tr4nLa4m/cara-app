import "./newsletter.css";

export default function Newsletter(props) {
  return (
    <section className="newsletter py-2d5 px-5 section-m1">
      <div className="newstext">
        <h4>Sign Up For Newsletters</h4>
        <p>Get E-mail updates about our latest shop and </p>
      </div>

      <div className="form">
        <input type="text" placeholder="Your e-mail address" />
        <button className="normal">Sign Up</button>
      </div>
    </section>
  );
}
