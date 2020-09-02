import React from "react";

import StatistickList from "./StatisticsList";

const StatisticSection = ({ stats }) => {
  return (
    <section>
      <h2>Statistics</h2>

      <StatistickList stats={stats} />
    </section>
  );
};

export default StatisticSection;
