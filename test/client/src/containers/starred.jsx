import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStarred, unStar } from '../actions/starred_actions';
import InfluencerCard from '../components/influencer_card';

class Starred extends Component {
  componentWillMount() {
    this.props.fetchStarred();
  }

  unStar = (id) => {
    this.props.unStar(id);
  }

  render() {
    return (
      <div>
        <h1>Starred influencers</h1>
        {this.props.starred.list.map((influencer) => (
          <InfluencerCard 
            key={influencer.id} 
            influencer={influencer} 
            onClick={this.unStar}
            starred />
        ))}
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
  return bindActionCreators({ fetchStarred, unStar }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Starred)
