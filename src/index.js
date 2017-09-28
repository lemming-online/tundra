import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bulma/css/bulma.css';
import App from './pages/App/App';
import RegistrationPage from './pages/RegistrationPage';

ReactDOM.render(<App />, document.getElementById('jay'));
ReactDOM.render(<RegistrationPage />, document.getElementById('root'));
