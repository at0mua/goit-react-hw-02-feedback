import React, { Component } from "react";

import Feedback from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default class App extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateStats = () => Object.entries(this.state);
  stateKeys = () => Object.keys(this.state);

  onLeaveFeedback = (e) => {
    const { name } = e.target;
    const value = this.state[name];

    this.setState({
      [name]: value + 1,
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() > 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;

  render() {
    return (
      <Section title="Задание 1 - Виджет отзывов">
        <Section title="Please leave feedback">
          <Feedback
            options={this.stateKeys()}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              stats={this.stateStats()}
              totalFeedback={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Section>
    );
  }
}
