import React from 'react';
import Starred from '../containers/starred';
import Sugested from '../containers/sugested';

export default () => (
  <div className="container">
    <div className="row">
      <div className="one-third column">
        <Sugested />
      </div>
      <div className="two-thirds column left-border">
        <Starred />
      </div>
    </div>
  </div>
)
