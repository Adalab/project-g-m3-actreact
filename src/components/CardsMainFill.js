import React from 'react';
import PropTypes from 'prop-types';
import GetImage from './GetImage';

class CardsMainFill extends React.Component {
  render() {
    const {
      collapsablesId,
      handleCollapsable,
      userData,
      changePreview,
      updateImage,
      isImageDefault,
      errors
    } = this.props;

    const {
      name,
      job,
      email,
      phone,
      linkedin,
      github,
      photo
    } = userData;

    return (
      <fieldset className="form__fieldset fieldset">
        <div id="fill" className={`container containerMother-js ${collapsablesId === 'fill' ? 'open' : ''}`}>
          <div className="form__fieldset-head-container containerClick-js" data-id="fill" onClick={handleCollapsable}>
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
              className={`form__fieldset-content-gap name ${errors.name ? 'orange-error' : ''}`}
              id="name"
              name="name"
              placeholder="Ej: Sally Jill"
              required
              onChange={changePreview}
              value={name}
            />
            {errors.name ? <p className="error-text">{errors.name}</p> : ''}
            <label
              htmlFor="job"
              className="form__fieldset-content job__label required"
            >
              Puesto*
            </label>
            <input
              type="text"
              className={`form__fieldset-content-gap gap2 job ${errors.job ? 'orange-error' : ''}`}
              id="job"
              name="job"
              placeholder="Ej: Front-end unicorn"
              required
              onChange={changePreview}
              value={job}
            />
            {errors.job ? <p className="error-text">{errors.job}</p> : ''}
            <div className="form__fieldset-add_img_wrapper">
              <p className="form__fieldset-add_img-text">Imagen de perfil</p>
              <GetImage
                photo={photo}
                isImageDefault={isImageDefault}
                updateImage={updateImage}
              />
            </div>
            <label htmlFor="phone" className="form__fieldset-content">
              Teléfono
            </label>
            <input
              type="tel"
              className="form__fieldset-content-gap phone"
              id="phone"
              name="phone"
              placeholder="Ej: 555-55-55-55"
              onChange={changePreview}
              value={phone || ''} 
            />
            <label
              htmlFor="email"
              className="form__fieldset-content mail__label required"
            >
              Email*
            </label>
            <input
              type="email"
              className={`form__fieldset-content-gap mail ${errors.email ? 'orange-error' : ''}`}
              id="email"
              name="email"
              placeholder="Ej: sally-hill@gmail.com"
              required
              onChange={changePreview}
              value={email}
            />
            {errors.email ? <p className="error-text">{errors.email}</p> : ''}
            <label
              htmlFor="linkedin"
              className="form__fieldset-content linkedin__label required"
            >
              Linkedin*
            </label>
            <input
              type="text"
              className={`form__fieldset-content-gap linkedin_input ${errors.linkedin ? 'orange-error' : ''}`}
              id="linkedin"
              name="linkedin"
              placeholder="Ej: sally.hill"
              required
              onChange={changePreview}
              value={linkedin}
            />
            {errors.linkedin ? <p className="error-text">{errors.linkedin}</p> : ''}
            <label
              htmlFor="github"
              className="form__fieldset-content github__label required"
            >
              Github*
            </label>
            <input
              type="text"
              className={`form__fieldset-content-gap github_input ${errors.github ? 'orange-error' : ''}`}
              id="github"
              name="github"
              placeholder="Ej: @sally-hill"
              required
              onChange={changePreview}
              value={github}
            />
            {errors.github ? <p className="error-text">{errors.github}</p> : ''}
          </div>
          <div className="line-bottom"></div>
        </div>
      </fieldset>
    );
  }
}

CardsMainFill.propTypes = {
  userData: PropTypes.shape({
    palette: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired
  }),
  changePreview: PropTypes.func,
  handleCollapsable: PropTypes.func.isRequired,
  collapsablesId: PropTypes.string,
  updateImage: PropTypes.func.isRequired,
  isImageDefault: PropTypes.bool.isRequired,
  errors: PropTypes.objectOf(PropTypes.string)

}

export default CardsMainFill;
