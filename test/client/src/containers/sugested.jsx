import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSugested } from '../actions/sugested_actions';

class Sugested extends Component {
  componentWillMount() {
    this.props.fetchSugested();
  }

  render() {
    return (
      <div>
        <h1>Sugested influencers</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sugested: state.sugested
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSugested }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sugested)
