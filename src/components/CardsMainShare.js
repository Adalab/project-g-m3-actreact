import React from 'react';
import PropTypes from 'prop-types';

class CardsMainShare extends React.Component {
  render() {

    const {
      collapsablesId,
      handleCollapsable,
      cardUrl
    } = this.props;

    return (
      <fieldset className="share__fieldset fieldset">
        <div id="share" className={`container containerMother-js ${collapsablesId === 'share' ? 'open' : ''}`}>
          <div className="content__share-container containerClick-js" data-id="share" onClick={handleCollapsable}>
            <h2 className="share__title">Comparte</h2>
          </div>
          <div className="rollContainer-js">
            <div className="share-button-create">
              <button className="btn button-create" type="submit">
                <span className="share_button-icon">Crear tarjeta</span>
              </button>
            </div>
          </div>
          <div className="line-bottom"></div>
        </div>
        <div className={`content__twitter-container hide-twitter ${cardUrl ? '' : 'hidden'}`}>
          <div className="share__text-twitter">
            <p className="share__title-twitter">La tarjeta ha sido creada:</p>
            <div className="link-twitter">
              <a className="twitter-url" href={cardUrl} target="_blank" rel="noopener noreferrer">
              {cardUrl}
              </a>
            </div>
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

CardsMainShare.propTypes = {
  userData: PropTypes.object.isRequired,
  handleCollapsable: PropTypes.func.isRequired,
  collapsablesId: PropTypes.string,
  cardUrl: PropTypes.string
};

export default CardsMainShare;
