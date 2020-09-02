import React from "react";

const Button = ({ title, onIncrementStat }) => (
  <button type="button" name={title} onClick={onIncrementStat}>
    {title}
  </button>
);

export default Button;
