import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import RWRRedux from 'rwr-redux';

import App from './App';
import CounterPage from './CounterPage';
import ScorePage from './ScorePage';
import About from '../components/About';

export default class Root extends Component {
  componentWillMount() {
    const mountedStore = RWRRedux.getStore();
    this.history = syncHistoryWithStore(browserHistory, mountedStore);
  }

  render() {
    return (
      <Router history={this.history} >
        <Route path="/" component={App}>
          <IndexRoute component={CounterPage} />
          <Route path="/score-board" component={ScorePage} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    );
  }
}
