import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function Tabs(props) {
  return (
    <BrowserRouter basename="">
      <ul>{props.children}</ul>
    </BrowserRouter>
  );
}

export default Tabs;
