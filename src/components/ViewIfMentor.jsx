import React from 'react';

function ViewIfMentor(props) {
  return <div> {props.isMentor === true ? props.children : null}</div>;
}

export default ViewIfMentor;
