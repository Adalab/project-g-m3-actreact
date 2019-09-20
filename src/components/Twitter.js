import React from 'react';
import PropTypes from 'prop-types';

const Twitter = props => {
  const {
    cardUrl
  } = props;

  const urlMessage = encodeURIComponent(`He creado esta tarjeta con Awesome Profile Cards. ¿Qué te parece?`);
  const hashtag = encodeURIComponent(`adalab,actreact,promoGrace`);
  const finalUrl = `https://twitter.com/intent/tweet?text=${urlMessage}&url=${cardUrl}&hashtags=${hashtag}`;

  return (
    <a className="button-twitter" target="_blank" href={finalUrl} rel="noopener noreferrer">
      <p className="text-link-twitter">Compartir en twitter</p>
    </a>
  );
}

Twitter.propTypes = {
  cardUrl: PropTypes.string
};

export default Twitter;