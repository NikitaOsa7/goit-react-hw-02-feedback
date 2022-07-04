import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notifications/Notifications';
import Section from 'components/Section/Section';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countPositivePercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100)
  };

  onFeedbackLeave = event => {
    event.preventDefault();
    const element = event.target.innerText.toLowerCase();

    this.setState(state => ({
      [element]: state[element] + 1
    }))
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { state, onFeedbackLeave, countPositivePercentage } = this;
    const buttons = Object.keys(state);
    const total = good + neutral + bad;
    
    return (
      <Section>
        <FeedbackOptions options={buttons} onFeedbackLeave={onFeedbackLeave} />
        <h2>Statistics</h2>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositivePercentage()}
          />
        ) : (
          <Notification/>
        )}
      </Section>
    )
  };
}