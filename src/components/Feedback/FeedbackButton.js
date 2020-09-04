import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, onLeaveFeedback }) => (
  <button type="button" name={title.toLowerCase()} onClick={onLeaveFeedback}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Button;
