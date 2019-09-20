import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {

  const {
    btnClass,
    action,
    text
  } = props;
  
  return (
    <button
      type="button"
      className={btnClass}
      onClick={action}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  btnClass: PropTypes.string.isRequired,
  handleReset: PropTypes.func,
  text: PropTypes.string.isRequired
}

export default Button;