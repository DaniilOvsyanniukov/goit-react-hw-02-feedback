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
  increment = (event) => {
    const buttonName = event.currentTarget.textContent;
    if (buttonName === "good") {
      this.setState((prevState) => ({ good: prevState.good + 1 }));
    } else if (buttonName === "neutral") {
      this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
    } else {
      this.setState((prevState) => ({ bad: prevState.bad + 1 }));
    }
  };

  render() {
    const buttons = Object.keys(this.state);
    let total = this.state.good + this.state.neutral + this.state.bad;
    let percantage = Math.floor((100 / total) * this.state.good);

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
          {total === 0 ? (
            <p>"No feedback given"</p>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              percantage={percantage}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
