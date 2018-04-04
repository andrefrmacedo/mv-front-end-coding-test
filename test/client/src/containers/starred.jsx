import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStarred, unStar, sortList } from '../actions/starred_actions';
import InfluencerCard from '../components/influencer_card';

class Starred extends Component {
  componentWillMount() {
    this.props.fetchStarred();
  }

  unStar = (id) => {
    this.props.unStar(id);
  }

  sortList = (e) => {
    this.props.sortList(e.target.value);
  }

  render() {
    return (
      <div className="row">
        <h1 className="one-half column">Starred Influencers</h1>
        <div className="one-half column sort">
          <span>Sort by:</span>
          <select className="sort-dropdown" onChange={this.sortList}>
            <option defaultValue hidden>Engagement (High - Low)</option>
            <option value="engagement">Engagement (High - Low)</option>
            <option value="followers">Followers (High - Low)</option>
            <option value="name">Name</option>
          </select>
        </div>

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
  return bindActionCreators({ fetchStarred, unStar, sortList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Starred);
