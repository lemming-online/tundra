import React from 'react';

function SectionLevelBar(props) {
  return (
    <div className="section-level-bar level is-mobile">
      <div className={`level-left ${props.loading ? 'is-loading' : ''}`}>
        <div className="level-item">
          <h1 className="title">
            {props.title} {props.live ? <span className="tag is-danger">LIVE</span> : ''}
          </h1>
        </div>
      </div>
      {props.error ? <span className="tag is-danger">{props.error}</span> : ''}
      <div className="level-right">{props.children}</div>
    </div>
  );
}

export default SectionLevelBar;
