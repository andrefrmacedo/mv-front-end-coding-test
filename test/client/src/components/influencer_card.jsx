import React, { Component } from 'react';
import InstaIcon from './instagram_icon';

class InfluencerCard extends Component {

  handleClick = () => {
    this.props.onClick(this.props.influencer.id);
  }

  renderStarred() {
    return (
      <div className="ten columns card with-background">
        <div className="row card-titles">
          <span className="eight columns">{this.props.influencer.full_name}</span>
          <span className="two columns stats">{this.props.influencer.statistics.followers}</span>
          <span className="two columns stats">{this.props.influencer.statistics.engagement}%</span>
        </div>
        <div className="row card-text">
          <span className="eight columns">
            <InstaIcon />
            {this.props.influencer.instagram_username}
          </span>
          <span className="two columns stats">Followers</span>
          <span className="two columns stats">Engagement</span>
        </div>
      </div>
    )
  }

  renderSugested() {
    return (
      <div className="nine columns card">
        <div className="card-titles">
          <span>{this.props.influencer.full_name}</span>
        </div>
        <div className="card-text">
          <InstaIcon />
          {this.props.influencer.instagram_username}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="row">
        <div className="one column">
          <div className="avatar-border">
            <img className="avatar" src={this.props.influencer.instagram_profile_image} alt="instagram picture" />
          </div>
        </div>
       
        {this.props.starred ? this.renderStarred() : this.renderSugested()}
       
        <span className="one column clickable" onClick={this.handleClick} >{this.props.starred ? 'x' : '+'}</span>
      </div>
    )
  }
}

export default InfluencerCard;
