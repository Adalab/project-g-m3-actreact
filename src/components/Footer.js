import React from "react";
import logo from "./../images/logo-adalab.png";

const Footer = () => {
  return (
    <footer className="landing__footer cards__footer-wrapper">
      <div className="container footer__tablet">
        <p className="landing__footer-copy">Awesome profile-cards by actReact @2019</p>
        <a href="https://adalab.es" target="_blank" rel="noopener noreferrer">
          <img
            className="landing__footer-logo"
            src={logo}
            alt="logo-adalab"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
