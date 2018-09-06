import React, { Component } from 'react';
import './SideBar.css';
import Tip from './Tip';
import LikeButton from './LikeButton';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: ''
    }
  }

  render() {
    return (
      <div className="sidebar-section clearfix">
        <div className="sidebar-head">
          <div>Tips!</div>
        </div>
        <div className="sidebar-body">
          <Tip />
        </div>
        <div className="sidebar-foot">
          <LikeButton />
        </div>
      </div>
    );
  }
}

export default SideBar;
