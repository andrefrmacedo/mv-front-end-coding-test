import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStarred } from '../actions/starred_actions';

class Starred extends Component {
  componentWillMount() {
    this.props.fetchStarred();
  }

  render() {
    return (
      <div>
        <h1>Starred influencers</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    starred: state.starred
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStarred }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Starred)
