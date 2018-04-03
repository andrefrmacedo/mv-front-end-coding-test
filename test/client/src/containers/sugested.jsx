import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSugested } from '../actions/sugested_actions';
import InfluencerCard from '../components/influencer_card';

class Sugested extends Component {
  componentWillMount() {
    this.props.fetchSugested();
  }

  render() {
    return (
      <div>
        <h1>Sugested influencers</h1>
        {this.props.sugested.list.map((influencer) => {
          return <InfluencerCard key={influencer.id} influencer={influencer} />
        })}
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
