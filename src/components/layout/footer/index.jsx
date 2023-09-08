import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import "./footer.scss";
const Footer = () => {
  return (
    <footer id="footer" className="page-footer">
      <div className="content">
        <img src="/brands/white-logo.svg" alt="white logo" className="logo" />
        <div className="footer-section hidden lg:block">
          <h4 className="header">About Radease</h4>
          <p>Get to know what we offer</p>
        </div>
        <div className="footer-section hidden lg:block">
          <h4 className="header">Blogs</h4>
          <p>Get the lates update on our product and services</p>
        </div>
        <div className="footer-section pl-2 pt-5 lg:p-0">
          <h4 className="header ">Contact us</h4>
          <a
            href="mailto:hello@radease.com"
            className="text-[#4EEAA7] text-xs font-bold block my-2"
          >
            hello@radease.com
          </a>
          <a
            href="https://wa.link/3wz5h7"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-white hover:text-[#42c78d]"
          >
            <RiWhatsappFill className="text-[#42C78D]" />{" "}
            <span className="text-xs font-bold">+234 806 006 7712</span>
          </a>
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
          {/* <a href="" target="_blank" rel="noreferrer" className="social-item">
            <FaFacebookF />
          </a> */}
          <a
            href="https://www.linkedin.com/showcase/radeasehealth/"
            target="_blank"
            rel="noreferrer"
            className="social-item"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com/radeasehealth?igshid=MzRlODBiNWFlZA"
            target="_blank"
            rel="noreferrer"
            className="social-item"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://x.com/radeasehealth?s=11&t=zsjs8GVlwd1vuP12Yqs9_w"
            target="_blank"
            rel="noreferrer"
            className="social-item"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
