import React, { Component } from "react";
import Button from "./components/Button/Button";
import Statistics from "./components/Statistics/Statistics";

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  increment = (buttonName) => {
    this.setState((prevState) => ({ [buttonName]: prevState[buttonName] + 1 }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.floor(
      (100 / this.countTotalFeedback()) * this.state.good
    );
    return percentage;
  };

  render() {
    const buttons = Object.keys(this.state);

    return (
      <div className="container">
        <div className="section">
          <p>Please leave feedback</p>
          <ul className="list">
            {buttons.map((el) => (
              <Button key={el} buttonName={el} increment={this.increment} />
            ))}
          </ul>
        </div>
        <div className="feedback-statistics">
          <p>Statistics</p>
          {this.countTotalFeedback() === 0 ? (
            <p>"No feedback given"</p>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percantage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
