import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(App)
