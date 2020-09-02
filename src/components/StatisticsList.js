import React from "react";
import createId from "../util/createId";

const StatisticsList = ({ stats }) => {
  return (
    <ul>
      {stats.map((stat) => (
        <li key={createId()}>
          <p>
            {stat[0]}: {stat[1]}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default StatisticsList;
