import React from 'react';
import logo from "./../images/logo-adalab.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="landing__footer cards__footer-wrapper">
          <div className="container footer__tablet">
            <p className="landing__footer-copy">Awesome profile-cards @2018</p>
            <a href="https://adalab.es">
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
  }


export default Footer;