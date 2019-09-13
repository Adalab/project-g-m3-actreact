import React from "react";

class CardsMainShare extends React.Component {
  render() {
    return (
      <fieldset className="share__fieldset fieldset">
        <div className="container containerMother-js open">
          <div className="content__share-container containerClick-js" id="share" onClick={this.props.handleCollapsable}>
            <h2 className="share__title">Comparte</h2>
          </div>
          <div className="rollContainer-js">
            <div className="share-button-create">
              <button className="btn button-create" type="submit">
                {" "}
                <span className="share_button-icon">Crear tarjeta</span>
              </button>
            </div>
          </div>
          <div className="line-bottom"></div>
        </div>
        <div className="content__twitter-container hide-twitter hidden">
          <div className="share__text-twitter">
            <p className="share__title-twitter">La tarjeta ha sido creada:</p>
            <div className="link-twitter"></div>{" "}
            <a className="button-twitter" target="_blank" href="#twitter">
              <p className="text-link-twitter">Compartir en twitter</p>
            </a>
          </div>
          <div className="line-bottom"></div>
        </div>
      </fieldset>
    );
  }
}

export default CardsMainShare;
