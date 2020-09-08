import React from "react";
import PropTypes from "prop-types";

import s from "./StatisticsItem.module.scss";

const StatisticsItem = ({ name, value }) => {
  return (
    <li>
      <p className={s.statistics_text}>
        <span>{name}: </span>
        <span>{value}</span>
      </p>
    </li>
  );
};

StatisticsItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default StatisticsItem;
