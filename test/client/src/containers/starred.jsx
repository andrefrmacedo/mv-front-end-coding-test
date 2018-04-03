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
      <div>
        <h1>Starred influencers</h1>

        <label hmtlfor="sort">Sort by:</label>
        <select name="sort" id="sort" onChange={this.sortList}>
          <option defaultValue hidden>Engagement (High - Low)</option>
          <option value="engagement">Engagement (High - Low)</option>
          <option value="followers">Followers (High - Low)</option>
          <option value="name">Name</option>
        </select>

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
