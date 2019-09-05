import React from "react";
import Footer from "./Footer";

class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="div-page">
          <div className="landing__page-div">
            <div className="page-content">
              <header className="landing__header">
                <div className="container">
                  <h1 className="landing__header-title">
                    Awesome Profile-Cards
                  </h1>
                </div>
              </header>
              <main className="landing__main">
                <div className="container">
                  <h2 className="landing__main-title">
                    Crea tu tarjeta de visita
                  </h2>
                  <p className="landing__main-paragraph">
                    Crea mejores contactos profesionales de forma fácil y cómoda
                  </p>
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
                  </ul>{" "}
                  <a className="landing__main-button" href="card.html">
                    <div className="landing__button-text">COMENZAR</div>
                  </a>
                </div>
              </main>
            </div>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
