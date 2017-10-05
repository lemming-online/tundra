import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import './App.css';
import SignInUpPage from './SignInUpPage';
import StuffList from '../components/StuffList';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SignInUpPage />
      <StuffList />
    </div>
  );
}

export default App;
