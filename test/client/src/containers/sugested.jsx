import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSugested, star } from '../actions/sugested_actions';
import InfluencerCard from '../components/influencer_card';

class Sugested extends Component {
  componentWillMount() {
    this.props.fetchSugested();
  }

  star = (id) => {
    this.props.star(id);
  }

  render() {
    return (
      <div>
        <h1>Sugested Influencers</h1>
        {this.props.sugested.list.map((influencer) => (
          <InfluencerCard 
            key={influencer.id} 
            influencer={influencer} 
            onClick={this.star} />
        ))}
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
  return bindActionCreators({ fetchSugested, star }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sugested);
