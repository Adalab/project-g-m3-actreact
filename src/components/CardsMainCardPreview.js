import React from "react";


class CardsMainCardPreview extends React.Component {
  constructor(props) {
    super(props);

    this.writeLinkedinUrl = this.writeLinkedinUrl.bind(this);
    this.writeGithubUrl = this.writeGithubUrl.bind(this);

  }
  writeLinkedinUrl(inputValue) {
    if (inputValue.includes('@')) {
      const newInputValue = inputValue.replace('@', '');
      return 'https://www.linkedin.com/in/' + newInputValue;
    }else {
      return 'https://www.linkedin.com/in/' + inputValue;
    }
  }

  writeGithubUrl(inputValue) {
    if (inputValue.includes('@')) {
      const newInputValue = inputValue.replace('@', '');
      return 'https://github.com/' + newInputValue;
    }else {
      return 'https://github.com/' + inputValue;
    }
  }

  render() {
    return (
      <section className="cards__img-section">
        <div className="container">
          <div className="cards__wrapper">
            <button
              type="button"
              className="btn cards__img-button reset js__reset img-btn__text"
            >
              reset
            </button>
            <div className={`cards__img-wrapper cards__img-wrapper-op${this.props.userData.palette}`}>
              <div className="img__text-box">
                <h2 className="img__title img-text__title">{`${this.props.userData.name || 'Nombre Apellido'}`}</h2>

                <p className="img__text img-text__subtitle">
                  {`${this.props.userData.position || 'Front-End Developer'}`}
                </p>
              </div>
              <div
                className="profile__image js__profile-container-image cards__img"
                style={{ backgroundImage: `url("${this.props.userData.image}")` }}
              >
                <img
                  className="image js__profile-image"
                  src={this.props.userData.image}
                  alt="Imagen por defecto"
                />
              </div>
              <div className="img__icons-box">
                <ul className="icons__list img-text__title">
                  <li className={`icon1 ${this.props.userData.email ? '' : 'hidden'}`}>
                    {" "}
                    <a
                      className="icon__anchor icons__item icon__mail icon__mail-blue "
                      href={`mailto:${this.props.userData.email || '#mail'} `}
                      target="_blank"
                      rel="noopener noreferrer"

                    >
                      <span className="span__text">
                        Si quieres enviarme un mail, visita este enlace.
                      </span>
                    </a>
                  </li>
                  <li className={`icon2 ${this.props.userData.telf ? '' : 'hidden'}`}>
                    {" "}
                    <a
                      className="icon__anchor icons__item icon__mobile icon__mobile-blue  "
                      href={`tel:${this.props.userData.telf || '#phone'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="span__text">
                        Si quieres llamarme, este es mi número.
                      </span>
                    </a>
                  </li>
                  <li className={`icon3 ${this.props.userData.linkedin ? '' : 'hidden'}`}>
                    {" "}
                    <a
                      className="icon__anchor icons__item icon__linkedin icon__linkedin-blue "
                      href={this.writeLinkedinUrl(this.props.userData.linkedin)}
                      target="_blank"
                      rel="noopener noreferrer"

                    >
                      <span className="span__text">
                        Si quieres ver mi perfil de linkedIn, visita este
                        enlace.
                      </span>
                    </a>
                  </li>
                  <li className={`icon4 ${this.props.userData.github ? '' : 'hidden'}`}>
                    {" "}
                    <a
                      className="icon__anchor icons__item icon__github icon__github-blue  "
                      href={this.writeGithubUrl(this.props.userData.github)}
                      target="_blank"
                      rel="noopener noreferrer"

                    >
                      <span className="span__text">
                        Si quieres ver mi perfil de linkedIn, visita este
                        enlace.
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default CardsMainCardPreview;
