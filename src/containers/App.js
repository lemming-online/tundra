import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import './App.css';
import SignInUpPage from './SignInUpPage';
import PasswordResetView from './PasswordResetView';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SignInUpPage />
      <PasswordResetView />
    </div>
  );
}

export default App;
