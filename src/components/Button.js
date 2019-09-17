import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

  render() {
    const { btnClass, handleReset, text} = this.props;
    return (
      <button
        type="button"
        className={btnClass}
        onClick={handleReset}
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  btnClass:  PropTypes.string.isRequired,
  handleReset: PropTypes.func,
  text: PropTypes.string.isRequired
}

export default Button;