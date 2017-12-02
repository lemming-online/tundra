import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as loginActions from '../actions/loginActions';
import CourseCard from '../components/CourseCard';
import SectionLevelBar from '../components/SectionLevelBar';
import GroupActionButtons from '../components/GroupActionButtons';
import CreateGroupButton from '../components/CreateGroupButton';

function loggedInPage(props) {
  return (
    <section className="section">
      <div className="container">
        <SectionLevelBar title="My Groups">
          <GroupActionButtons />
        </SectionLevelBar>

        <div className="columns is-multiline is-mobile">
          <CourseCard groupName="CS 193" professorName="Professor Hankins" courseID="1" />
          <CourseCard />
        </div>
      </div>
      <br />
      <CreateGroupButton />
    </section>
  );
}

function loggedOutPage() {
  return (
    <div>
      <section className="hero is-primary is-fullheight is-bold ">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Welcome to Lemming</h1>
            <h2 className="subtitle">You are logged out.</h2>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth is-hidden-mobile">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a href="#overview">Overview</a>
                </li>
                <li>
                  <a href="#students">For Students</a>
                </li>
                <li>
                  <a href="#instructors">For Instructors</a>
                </li>
                <li>
                  <a href="#events">For Events</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <section id="overview" className="hero is-light is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Overview</h1>
            <h2 className="subtitle">A new learning platform</h2>
          </div>
        </div>
      </section>
      <section id="students" className="hero is-info is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">For Students</h1>
            <h2 className="subtitle">A new learning platform</h2>
          </div>
        </div>
      </section>
      <section id="instructors" className="hero is-warning is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">For Instructors</h1>
            <h2 className="subtitle">A new learning platform</h2>
          </div>
        </div>
      </section>
      <section id="events" className="hero is-success is-bold is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">For Events</h1>
            <h2 className="subtitle">A new learning platform</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

function HomePage(props) {
  return props.isAuthenticated ? loggedInPage(props) : loggedOutPage();
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    uid: state.loginReducer.uid,
    firstName: state.loginReducer.firstName,
    lastName: state.loginReducer.lastName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
