import React from "react";
import PropTypes from "prop-types";

import createId from "../../util/createId";

const Statistic = ({ stats, totalFeedback, positivePercentage }) => {
  return (
    <ul>
      {stats.map((stat) => (
        <li key={createId()}>
          <p>
            <span>{stat[0]}: </span>
            <span>{stat[1]}</span>
          </p>
        </li>
      ))}
      <li>
        <p>
          <span>total: </span>
          <span>{totalFeedback}</span>
        </p>
      </li>
      <li>
        <p>
          <span>positive feedback: </span>
          <span>{positivePercentage} %</span>
        </p>
      </li>
    </ul>
  );
};

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ),
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
