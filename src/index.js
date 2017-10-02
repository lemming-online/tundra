import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bulma/css/bulma.css';
import './index.css';
import App from './containers/App';
import RegistrationPage from './containers/RegistrationPage';
import LoginPage from './containers/LoginPage';

ReactDOM.render(<App />, document.getElementById('jay'));
// ReactDOM.render(<RegistrationPage />, document.getElementById('root'));
ReactDOM.render(<LoginPage />, document.getElementById('root'));
