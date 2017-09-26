import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import InputComponent from './pages/InputComponent';

ReactDOM.render(<InputComponent/>, document.getElementById('root'));
registerServiceWorker();
