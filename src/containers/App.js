import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import './App.css';
import SignInUpPage from './SignInUpPage';
import StuffList from '../components/StuffList';
import GuestLoginView from './GuestLoginView';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SignInUpPage />
    </div>
  );
}

export default App;
