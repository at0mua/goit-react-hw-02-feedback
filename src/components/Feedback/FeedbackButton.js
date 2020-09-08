import React from "react";
import PropTypes from "prop-types";

import s from "./FeedbackButton.module.scss";

const Button = ({ title, onLeaveFeedback }) => (
  <button
    type="button"
    name={title.toLowerCase()}
    className={s.feedback_btn}
    onClick={onLeaveFeedback}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Button;
