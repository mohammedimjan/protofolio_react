import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Services from "../Services/Services";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Mohammed</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Sercives"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Expirience"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Expirience</li>
            </Link>
            <Link
              spy={true}
              to="Protofolio"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Protofolio</li>
            </Link>
            <Link
              spy={true}
              to="Testimonials"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
