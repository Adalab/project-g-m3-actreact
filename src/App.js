import React from 'react';
import './App.scss';
import logo from './images/logo-adalab.png';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div className="div-page">
          <div className="landing__page-div">
          <div className="page-content">
          <header className="landing__header">
          <div className="container">
          <h1 className="landing__header-title">Awesome Profile-Cards</h1>

          </div>
          </header>
          <main className="landing__main">
          <div className="container">
          <h2 className="landing__main-title">
          Crea tu tarjeta de visita
          </h2>

          <p className="landing__main-paragraph">Crea mejores contactos profesionales de forma fácil y cómoda</p>
          <ul className="landing__main-list">
          <li className="landing__main-li landing__li-text">
          <div className="landing__-logo landing__icon-design"></div>
          <p className="landing__li-text">Diseña</p>
          </li>
          <li className="landing__main-li landing__li-text">
          <div className="landing__-logo landing__icon-fill"></div>
          <p className="landing__li-text">Rellena</p>
          </li>
          <li className="landing__main-li landing__li-text li-share">
          <div className="landing__-logo landing__icon-share"></div>
          <p className="landing__li-text">Comparte</p>
          </li>
          </ul> <a className="landing__main-button" href="card.html">
          <div className="landing__button-text">
          COMENZAR
          </div>
          </a>

          </div>
          </main>
          </div>
          </div>
          <footer className="landing__footer">
          <div className="container footer__tablet">
          <p className="landing__footer-copy">Awesome profile-cards @2018</p> <a href="http://adalab.es/">
          <img className="landing__footer-logo" src={logo} alt="logo-adalab" />
          </a>

          </div>
          </footer>
          </div>
      </React.Fragment>
    );
  }
}

export default App;
