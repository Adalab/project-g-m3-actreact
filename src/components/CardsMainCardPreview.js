import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

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
    
    const { 
      userData, 
      handleReset 
    } = this.props;

    const {
      palette,
      name,
      job,
      email,
      telf,
      linkedin,
      github, 
      photo
    } = userData;

    return (
      <section className="cards__img-section">
        <div className="container">
          <div className="cards__wrapper">
            <Button 
              btnClass={'btn cards__img-button reset js__reset img-btn__text'}
              action={handleReset}
              text={'reset'}
            />
            <div className={`cards__img-wrapper cards__img-wrapper-op${palette}`}>
              <div className="img__text-box">
                <h2 className="img__title img-text__title">{`${name || 'Nombre Apellido'}`}</h2>

                <p className="img__text img-text__subtitle">
                  {`${job || 'Front-End Developer'}`}
                </p>
              </div>
              <div
                className="profile__image js__profile-container-image cards__img"
                style={{ backgroundImage: `url("${photo}")` }}
              >
                <img
                  className="image js__profile-image"
                  src={photo}
                  alt= {`Foto ${name || 'por defecto'}`}
                />
              </div>
              <div className="img__icons-box">
                <ul className="icons__list img-text__title">
                  <li className={`icon1 ${email ? '' : 'hidden'}`}>
                    {" "}
                    <a
                      className="icon__anchor icons__item icon__mail icon__mail-blue "
                      href={`mailto:${email || '#mail'} `}
                      target="_blank"
                      rel="noopener noreferrer"

                    >
                      <span className="span__text">
                        Si quieres enviarme un mail, visita este enlace.
                      </span>
                    </a>
                  </li>
                  <li className={`icon2 ${telf ? '' : 'hidden'}`}>
                    {" "}
                    <a
                      className="icon__anchor icons__item icon__mobile icon__mobile-blue  "
                      href={`tel:${telf || '#phone'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="span__text">
                        Si quieres llamarme, este es mi número.
                      </span>
                    </a>
                  </li>
                  <li className={`icon3 ${linkedin ? '' : 'hidden'}`}>
                    {" "}
                    <a
                      className="icon__anchor icons__item icon__linkedin icon__linkedin-blue "
                      href={this.writeLinkedinUrl(linkedin)}
                      target="_blank"
                      rel="noopener noreferrer"

                    >
                      <span className="span__text">
                        Si quieres ver mi perfil de linkedIn, visita este
                        enlace.
                      </span>
                    </a>
                  </li>
                  <li className={`icon4 ${github ? '' : 'hidden'}`}>
                    {" "}
                    <a
                      className="icon__anchor icons__item icon__github icon__github-blue  "
                      href={this.writeGithubUrl(github)}
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

CardsMainCardPreview.propTypes = {
  userData: PropTypes.shape({
    palette: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telf: PropTypes.string,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired
  })
}

export default CardsMainCardPreview;
