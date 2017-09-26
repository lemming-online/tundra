import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import RegistrationPage from './pages/RegistrationPage';

ReactDOM.render(<RegistrationPage/>, document.getElementById('root'));
registerServiceWorker();
