import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterDisplay from '../components/CounterDisplay';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default" style={{ borderRadius: 0 }}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">RailsReduxRouter Example</a>
          </div>

          <div className="pull-right">
            <CounterDisplay
              counter={this.props.counter}
            />
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(Navbar);