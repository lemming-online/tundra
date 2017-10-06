import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import './App.css';
import SignInUpPage from './SignInUpPage';
import StuffList from '../components/StuffList';
import GuestLoginView from './GuestLoginView';
import UserCourseOverview from './UserCourseOverview';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="App">
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Lemming Front-End Component Demo</h1>
            <h2 className="subtitle">For Sprint 1</h2>
          </div>
        </div>
      </section>
      <HeaderComponent />
      <SignInUpPage />
      <GuestLoginView />
      <StuffList />
      <UserCourseOverview />
      <UserProfile />
    </div>
  );
}

export default App;
