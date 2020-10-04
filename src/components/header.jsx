import React, { Component } from 'react';

class Header extends Component {
  render() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    return (
      <div className="header">
        <div className="header-title">My SKKU Tracker</div>
        <div className="header-info">
          <div className="header-list">해야할 과제 목록</div>
          <div className="header-time">
            이번주 마감까지{' '}
            <strong className="real-time">
              {hours}:{minutes}:{new Date().getSeconds()}
            </strong>
          </div>
          <div className="header-day">10월 2일(금)</div>
        </div>
      </div>
    );
  }
}

export default Header;
