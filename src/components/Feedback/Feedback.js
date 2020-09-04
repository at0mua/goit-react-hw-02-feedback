import React from "react";
import PropTypes from "prop-types";

import Button from "./FeedbackButton";

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
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
