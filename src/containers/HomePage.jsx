import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/loginActions';
import CourseCard from '../components/CourseCard';

function loggedInPage(props) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Welcome to Lemming, {`${props.firstName}`}! </h1>
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li className="is-active">
              <a href="/" aria-current="page">
                My Courses
              </a>
            </li>
          </ul>
        </nav>

        <div className="columns is-multiline is-mobile">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </section>
  );
}

function loggedOutPage() {
  return (
    <section className="hero is-primary is-large is-bold ">
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
                <a>Overview</a>
              </li>
              <li>
                <a>For Students</a>
              </li>
              <li>
                <a>For Instructors</a>
              </li>
              <li>
                <a>For Events</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
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
