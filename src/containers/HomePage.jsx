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
    <section className="section">
      <div className="container">
        <h1 className="title">Welcome to Lemming. Please sign in.</h1>
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
