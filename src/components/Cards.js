import React from "react";
import logo from "./../images/logo-adalab.png";
import defaultImage from "./DefaultImage";

class Cards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="cards__main-wrapper">
          <header className="cards__header">
            <div className="container">
              <h1 className="cards__header-title">Awesome Profile-Cards</h1>

              <div className="landing__header-logo"></div>
            </div>
          </header>
          <main className="cards__main">
            <form
              className="form__all-sections form__section-fill"
              onSubmit="writeUrl()"
            >
              <section className="cards__img-section">
                <div className="container">
                  <div className="cards__wrapper">
                    <button
                      type="button"
                      className="btn cards__img-button reset js__reset img-btn__text"
                    >
                      reset
                    </button>
                    <div className="cards__img-wrapper cards__img-wrapper-op1">
                      <div className="img__text-box">
                        <h2 className="img__title img-text__title">
                          Nombre Apellido
                        </h2>

                        <p className="img__text img-text__subtitle">
                          Front-end developer
                        </p>
                      </div>
                      <div
                        className="profile__image js__profile-container-image cards__img"
                        style={{ backgroundImage: "url(" + defaultImage + ")" }}
                      >
                        <img
                          className="image js__profile-image"
                          src={defaultImage}
                          alt="Imagen por defecto"
                        />
                      </div>
                      <div className="img__icons-box">
                        <ul className="icons__list img-text__title">
                          <li className="icon1 hidden">
                            {" "}
                            <a
                              className="icon__anchor icons__item icon__mail icon__mail-blue "
                              href="#mail"
                              target="_blank"
                            >
                              <span className="span__text">
                                Si quieres enviarme un mail, visita este enlace.
                              </span>
                            </a>
                          </li>
                          <li className="icon2 hidden">
                            {" "}
                            <a
                              className="icon__anchor icons__item icon__mobile icon__mobile-blue  "
                              href="#phone"
                              target="_blank"
                            >
                              <span className="span__text">
                                Si quieres llamarme, este es mi número.
                              </span>
                            </a>
                          </li>
                          <li className="icon3 hidden">
                            {" "}
                            <a
                              className="icon__anchor icons__item icon__linkedin icon__linkedin-blue "
                              href="#linkedin"
                              target="_blank"
                            >
                              <span className="span__text">
                                Si quieres ver mi perfil de linkedIn, visita
                                este enlace.
                              </span>
                            </a>
                          </li>
                          <li className="icon4 hidden">
                            {" "}
                            <a
                              className="icon__anchor icons__item icon__github icon__github-blue  "
                              href="#github"
                              target="_blank"
                            >
                              <span className="span__text">
                                Si quieres ver mi perfil de linkedIn, visita
                                este enlace.
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="form__wrapper">
                <fieldset className="design">
                  <div className="container containerMother-js open">
                    <div className="design-title__container containerClick-js">
                      <h2 className="desing__title">Diseña</h2>
                    </div>
                    <div className="colors__container rollContainer-js">
                      <p className="design__subtitle">Colores</p>
                      <div className="color__group">
                        <div className="op1__container">
                          <label htmlFor="colorsop1" className="colors__row">
                            <input
                              className="input1"
                              id="colorsop1"
                              type="radio"
                              value="1"
                              name="colors"
                            />
                            <ul className="colors__list">
                              <li
                                className="list__item blue1"
                                style={{ backgroundColor: "#114e4e" }}
                              >
                                #114e4e
                              </li>
                              <li
                                className="list__item blue2"
                                style={{ backgroundColor: "#438792" }}
                              >
                                #438792
                              </li>
                              <li
                                className="list__item blue3"
                                style={{ backgroundColor: "#a2deaf" }}
                              >
                                #a2deaf
                              </li>
                            </ul>
                          </label>
                        </div>
                        <div className="op2__container">
                          <label htmlFor="colorsop2" className="colors__row">
                            <input
                              className="input2"
                              id="colorsop2"
                              type="radio"
                              value="2"
                              name="colors"
                            />
                            <ul className="colors__list">
                              <li
                                className="list__item red1"
                                style={{ backgroundColor: "#420101" }}
                              >
                                #420101
                              </li>
                              <li
                                className="list__item red2"
                                style={{ backgroundColor: "#bd1010" }}
                              >
                                #bd1010
                              </li>
                              <li
                                className="list__item red3"
                                style={{ backgroundColor: "#e95626" }}
                              >
                                #e95626
                              </li>
                            </ul>
                          </label>
                        </div>
                        <div className="op3__container">
                          <label htmlFor="colorsop3" className="colors__row">
                            <input
                              className="input3"
                              id="colorsop3"
                              type="radio"
                              value="3"
                              name="colors"
                            />
                            <ul className="colors__list">
                              <li
                                className="list__item green1"
                                style={{ backgroundColor: "#3e5b65" }}
                              >
                                #3e5b65
                              </li>
                              <li
                                className="list__item green2"
                                style={{ backgroundColor: "#eab052" }}
                              >
                                #eab052
                              </li>
                              <li
                                className="list__item green3"
                                style={{ backgroundColor: "#a0c0cf" }}
                              >
                                #a0c0cf
                              </li>
                            </ul>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="form__fieldset fieldset">
                  <div className="container containerMother-js open">
                    <div className="form__fieldset-head-container containerClick-js">
                      <h2 className="form__fieldset-main_title">Rellena</h2>
                    </div>
                    <div className="form__fieldset-main_content rollContainer-js">
                      <label
                        htmlFor="name"
                        className="form__fieldset-content name__label required"
                      >
                        Nombre completo*
                      </label>
                      <input
                        type="text"
                        className="form__fieldset-content-gap name"
                        id="name"
                        name="name"
                        placeholder="Ej: Sally Jill"
                        required
                      />
                      <label
                        htmlFor="position"
                        className="form__fieldset-content job__label required"
                      >
                        Puesto*
                      </label>
                      <input
                        type="text"
                        className="form__fieldset-content-gap gap2 job"
                        id="position"
                        name="position"
                        placeholder="Ej: Front-end unicorn"
                        required
                      />
                      <div className="form__fieldset-add_img_wrapper">
                        <p className="form__fieldset-add_img-text">
                          Imagen de perfil
                        </p>
                        <button
                          className="form__fieldset-add_img-button js__profile-trigger"
                          type="button"
                          name="add_img"
                        >
                          Añadir imagen
                        </button>
                        <input
                          type="file"
                          name="image"
                          id="img-selector"
                          className="hidden js__profile-upload-btn"
                          required
                        />
                        <div className="form__fieldset-add_img-mini_container js__profile-preview"></div>
                      </div>
                      <label
                        htmlFor="email"
                        className="form__fieldset-content mail__label required"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        className="form__fieldset-content-gap mail"
                        id="email"
                        name="email"
                        placeholder="Ej: sally-hill@gmail.com"
                        required
                      />
                      <label htmlFor="telf" className="form__fieldset-content">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className="form__fieldset-content-gap phone"
                        id="telf"
                        name="telf"
                        placeholder="Ej: 555-55-55-55"
                      />
                      <label
                        htmlFor="linkedin"
                        className="form__fieldset-content linkedin__label required"
                      >
                        Linkedin*
                      </label>
                      <input
                        type="text"
                        className="form__fieldset-content-gap linkedin_input"
                        id="linkedin"
                        name="linkedin"
                        placeholder="Ej: sally.hill"
                        required
                      />
                      <label
                        htmlFor="github"
                        className="form__fieldset-content github__label required"
                      >
                        Github*
                      </label>
                      <input
                        type="text"
                        className="form__fieldset-content-gap github_input"
                        id="github"
                        name="github"
                        placeholder="Ej: @sally-hill"
                        required
                      />
                    </div>
                    <div className="line-bottom"></div>
                  </div>
                </fieldset>
                <fieldset className="share__fieldset fieldset">
                  <div className="container containerMother-js open">
                    <div className="content__share-container containerClick-js">
                      <h2 className="share__title">Comparte</h2>
                    </div>
                    <div className="rollContainer-js">
                      <div className="share-button-create">
                        <button className="btn button-create" type="submit">
                          {" "}
                          <span className="share_button-icon">
                            Crear tarjeta
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="line-bottom"></div>
                  </div>
                  <div className="content__twitter-container hide-twitter hidden">
                    <div className="share__text-twitter">
                      <p className="share__title-twitter">
                        La tarjeta ha sido creada:
                      </p>
                      <div className="link-twitter"></div>{" "}
                      <a
                        className="button-twitter"
                        target="_blank"
                        href="#twitter"
                      >
                        <p className="text-link-twitter">
                          Compartir en twitter
                        </p>
                      </a>
                    </div>
                    <div className="line-bottom"></div>
                  </div>
                </fieldset>
              </div>
            </form>
          </main>
        </div>
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
      </React.Fragment>
    );
  }
}

export default Cards;
