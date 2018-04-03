import React, { Component } from 'react';

class InfluencerCard extends Component {

  handleClick = () => {
    this.props.onClick(this.props.influencer.id);
  }

  render() {
    return (
      <div>
        <img src={this.props.influencer.instagram_profile_image} alt="instagram picture" />
        <div>{this.props.influencer.full_name}</div>
        <div>@{this.props.influencer.instagram_username}</div>
        <div>{this.props.influencer.statistics.followers}</div>
        <div>{this.props.influencer.statistics.engagement}</div>
        <div onClick={this.handleClick} >{this.props.starred ? 'Remove' : 'Add'}</div>
      </div>
    )
  }
}

export default InfluencerCard;
