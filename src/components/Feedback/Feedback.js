import React from "react";
import PropTypes from "prop-types";

import Button from "./FeedbackButton";
import s from "./Feedback.module.scss";

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.btnContainer}>
      {options.map((name) => (
        <Button key={name} title={name} onLeaveFeedback={onLeaveFeedback} />
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
