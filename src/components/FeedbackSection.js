import React from "react";

import Button from "./FeedbackButton";

const FeedbackSection = ({ onIncrementStat }) => {
  return (
    <section>
      <h2>Please leave feedback</h2>
      <Button title="good" onIncrementStat={onIncrementStat} />
      <Button title="neutral" onIncrementStat={onIncrementStat} />
      <Button title="bad" onIncrementStat={onIncrementStat} />
    </section>
  );
};

export default FeedbackSection;
