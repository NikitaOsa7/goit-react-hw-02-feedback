import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';


export class App extends Component {
  state = {
    good: 0,
    netural: 0,
    bad: 0,
  }
}

onFeedbackLeave = evt => {
  evt.preventDefault();
  const element = evt.target.innerText.toLowerCase();
  this.setState(state => ({
    [element]: state[element] + 1,
  }));
};