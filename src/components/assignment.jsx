import React, { Component } from 'react';

class Assignment extends Component {
  render() {
    const { name, info, color, grade } = this.props.subject;
    return (
      // (구글링)태그의 동적 style 적용은 아래와 같이 하면 됨
      <div className="ass-container" style={{ backgroundColor: color }}>
        <span className="ass-img" style={{ backgroundColor: color }}>
          <p>{grade}</p>
        </span>
        <div className="ass-contents">
          <div className="ass-name">{name}</div>
          <div className="ass-info">{info}</div>
        </div>
        <div className="close-btn">
          <img src="../../images/delete.svg" alt="delete" />
        </div>
      </div>
    );
  }
}

export default Assignment;
