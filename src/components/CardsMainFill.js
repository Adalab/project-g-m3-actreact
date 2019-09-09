import React from "react";

class CardsMainFill extends React.Component {
  render() {
    return (
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
              onChange = {this.props.changePreview}
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
              <p className="form__fieldset-add_img-text">Imagen de perfil</p>
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
    );
  }
}

export default CardsMainFill;
