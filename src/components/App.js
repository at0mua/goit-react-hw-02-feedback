import React, { Component } from "react";

import FeedbackSection from "./FeedbackSection";
import StatisticsSection from "./StatisticsSection";

export default class App extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (e) => {
    const { name } = e.target;
    const value = this.state[name];
    console.log(value);

    this.setState({
      [name]: value + 1,
    });
  };

  render() {
    const stats = Object.entries(this.state);

    return (
      <>
        <h2>Задание 1 - Виджет отзывов</h2>
        <FeedbackSection onIncrementStat={this.handleIncrement} />

        <StatisticsSection stats={stats} />
      </>
    );
  }
}
