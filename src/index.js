import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Registration from './pages/Registration';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Registration />, document.getElementById('root'));
registerServiceWorker();
