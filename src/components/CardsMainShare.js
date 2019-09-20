import React from 'react';
import PropTypes from 'prop-types';
import Twitter from './Twitter';

class CardsMainShare extends React.Component {
  render() {
    const {
      collapsablesId,
      handleCollapsable,
      cardUrl,
      getUrl,
      isSend
    } = this.props;

    return (
      <fieldset className="share__fieldset fieldset">
        <div id="share" className={`container containerMother-js ${collapsablesId === 'share' ? 'open' : ''}`}>
          <div className="content__share-container containerClick-js" data-id="share" onClick={handleCollapsable}>
            <h2 className="share__title">Comparte</h2>
          </div>
          <div className="rollContainer-js">
            <div className="share-button-create">
              <button className={`btn button-create ${cardUrl ? 'greyButton' : ''} `} type="button" onClick={getUrl} disabled={cardUrl}>
                <span className="share_button-icon">Crear tarjeta</span>
              </button>
            </div>
          </div>
          <div className="line-bottom share"></div>
        </div>
        <div className={`content__twitter-container hide-twitter`}>
          <p className={`share__title-twitter orange-text ${isSend ? '' : 'hidden'}`}>La tarjeta se está creando</p>
          <div className={`share__text-twitter ${cardUrl && !isSend ? '' : 'hidden'}`}>
            <p className="share__title-twitter">La tarjeta ha sido creada:</p>
            <div className="link-twitter">
              <a className="twitter-url" href={cardUrl} target="_blank" rel="noopener noreferrer">
                {cardUrl}
              </a>
            </div>
            <Twitter cardUrl={cardUrl} />
          </div>
          <div className={`line-bottom ${cardUrl ? '' : 'hidden'}`}></div>
        </div>
      </fieldset>
    );
  }
}

CardsMainShare.propTypes = {
  userData: PropTypes.object.isRequired,
  handleCollapsable: PropTypes.func.isRequired,
  collapsablesId: PropTypes.string,
  cardUrl: PropTypes.string,
  isSend: PropTypes.bool.isRequired,

};

export default CardsMainShare;
