import React from "react";
import PropTypes from "prop-types";

import StatisticsItem from "./StatisticsItem";
import createId from "../../util/createId";
import s from "./Statistics.module.scss";

const Statistic = ({ stats, totalFeedback, positivePercentage }) => {
  return (
    <ul className={s.statistic_list}>
      {stats.map((stat) => (
        <StatisticsItem key={createId()} name={stat[0]} value={stat[1]} />
      ))}
      <StatisticsItem name="total: " value={totalFeedback} />
      <StatisticsItem
        name="positive feedback: "
        value={positivePercentage + " %"}
      />
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
