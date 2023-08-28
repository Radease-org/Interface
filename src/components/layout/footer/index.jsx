import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="content">
        <img src="/brands/whiteLogo.svg" alt="white logo" className="logo" />
        <div className="footer-section">
          <h4 className="header">About Radease</h4>
          <p>Get to know what we offer</p>
        </div>
        <div className="footer-section">
          <h4 className="header">Blogs</h4>
          <p>Get the lates update on our product and services</p>
        </div>
        <div className="footer-section">
          <h4 className="header">Contact us</h4>
          <p>Need anything? Get in touch and we can help</p>
        </div>
      </div>
      <div className="last-section">
        <div>
          <Link to="/">Privacy policy</Link>
          <Link to="/">Terms</Link>
          <Link to="/">Cookie settings</Link>
          <Link to="/">Copyright 2023 Radease</Link>
        </div>
        <div className="socials">
          <div className="social-item">
            <FaFacebookF />
          </div>
          <div className="social-item">
            <FaLinkedinIn />
          </div>
          <div className="social-item">
            <AiFillInstagram />
          </div>
          <div className="social-item">
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
