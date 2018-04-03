import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStarred } from '../actions/starred_actions';
import InfluencerCard from '../components/influencer_card';

class Starred extends Component {
  componentWillMount() {
    this.props.fetchStarred();
  }

  render() {
    return (
      <div>
        <h1>Starred influencers</h1>
        {this.props.starred.list.map((influencer) => {
          return <InfluencerCard key={influencer.id} influencer={influencer} starred />
        })}
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
