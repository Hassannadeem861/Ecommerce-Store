import React from "react";
import "./Footer.css"; // Footer ke liye separate CSS file
import { Link } from "react-router-dom";
// import Layout from "../Layout/Layout";

const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-navigation">
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <ul>
            <li>
              <a to="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a to="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a to="#">
                <i className="fab fa-aedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>
            Email: Professionalwebdeveloper123@gmail.com | Phone: 03164593747
          </p>
        </div>
        <div className="footer-copyright"></div>
      </footer>
    </div>
  );
};

export default Footer;
