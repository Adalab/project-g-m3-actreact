import React from "react";
import defaultImage from "./DefaultImage";

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
            <div className="cards__img-wrapper cards__img-wrapper-op1">
              <div className="img__text-box">
                <h2 className="img__title img-text__title">{this.props.state.name}</h2>

                <p className="img__text img-text__subtitle">
                  {this.props.state.position}
                </p>
              </div>
              <div
                className="profile__image js__profile-container-image cards__img"
                style={{ backgroundImage: `url("${this.props.state.image}")` }}
              >
                <img
                  className="image js__profile-image"
                  src={this.props.state.image}
                  alt="Imagen por defecto"
                />
              </div>
              <div className="img__icons-box">
                <ul className="icons__list img-text__title">
                  <li className={`icon1 ${this.props.state.email ? '' : 'hidden'}`}>
                    {" "}
                    <a
                      className="icon__anchor icons__item icon__mail icon__mail-blue "
                      href={`mailto:${this.props.state.email}`}
                      target="_blank"
                      rel="noopener noreferrer"

                    >
                      <span className="span__text">
                        Si quieres enviarme un mail, visita este enlace.
                      </span>
                    </a>
                  </li>
                  <li className={`icon2 ${this.props.state.telf ? '' : 'hidden'}`}>
                    {" "}
                    <a
                      className="icon__anchor icons__item icon__mobile icon__mobile-blue  "
                      href={`tel:${this.props.state.telf}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="span__text">
                        Si quieres llamarme, este es mi número.
                      </span>
                    </a>
                  </li>
                  <li className={`icon3 ${this.props.state.linkedin ? '' : 'hidden'}`}>
                    {" "}
                    <a
                      className="icon__anchor icons__item icon__linkedin icon__linkedin-blue "
                      href={this.writeLinkedinUrl(this.props.state.linkedin)}
                      target="_blank"
                      rel="noopener noreferrer"

                    >
                      <span className="span__text">
                        Si quieres ver mi perfil de linkedIn, visita este
                        enlace.
                      </span>
                    </a>
                  </li>
                  <li className={`icon4 ${this.props.state.github ? '' : 'hidden'}`}>
                    {" "}
                    <a
                      className="icon__anchor icons__item icon__github icon__github-blue  "
                      href={this.writeGithubUrl(this.props.state.github)}
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

CardsMainCardPreview.defaultProps={
  name:'Nombre Apellido',
  job: 'Front-end developer',
  mail: '#mail',
  phone: '#phone',
  linkedin:'#linkedin',
  github:'#github',
  image:defaultImage
}



export default CardsMainCardPreview;
