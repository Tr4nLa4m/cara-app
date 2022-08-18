import { Fragment } from "react";
import { NavLink } from "react-bootstrap";

export default function NotFoundPage() {
  return (
    <Fragment>
      <h3 className="mt-4" style={{ textAlign: "center", color: "Highlight" }}>
        404 NOT FOUND
      </h3>
      <NavLink
        href="/"
        className="py-1d25"
        style={{
          textAlign: "center",
          fontSize: "1.25rem",
          fontWeight: "600",
          color: "var(--nav-color-hover)",
          border: "2px solid #e4e3e5",
          width: "10rem",
          margin: "1rem auto",
        }}
      >
        Go to Cara
      </NavLink>
      <div className="d-flex justify-content-center">
        <img
          className="center"
          src="/images/not_found_2.webp"
          alt="Page not found"
        />
      </div>
    </Fragment>
  );
}
