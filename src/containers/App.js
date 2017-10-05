import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import './App.css';
import SignInUpPage from './SignInUpPage';
import StuffList from '../components/StuffList';
import GuestLoginView from './GuestLoginView';
import UserCourseOverview from './UserCourseOverview';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Lemming React Component Demo</h1>
            <h2 className="subtitle">For Sprint 1</h2>
          </div>
        </div>
      </section>
      <SignInUpPage />
      <GuestLoginView />
      <StuffList />
      <UserCourseOverview />
    </div>
  );
}

export default App;
