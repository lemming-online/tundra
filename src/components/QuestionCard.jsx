import React from 'react';
import userBlank from '../images/user-blank.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/sessionActions';
// import PropTypes from 'prop-types';

function QuestionCard(props) {
  console.log(props);
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="content">{props.question}</div>
        </div>
        <div className="media question-card-media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={props.image ? `//${props.image}` : userBlank}
                className="avatar is-circle"
                alt="Placeholder "
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="name is-4">{`${props.firstName} ${props.lastName}`}</p>

          </div>
        </div>
        {props.isMentor ? <footer className="card-footer">
          <a role="button" className="card-footer-item">
            Claim
          </a>
          <a role="button" className="card-footer-item">
            Edit
          </a>
          <a role="button" onClick={() => props.actions.removeHelpQuestion(props.sessionID, props.id)} className="card-footer-item">
            Helped
          </a>
        </footer> : <footer className="card-footer"></footer>}
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

function mapStateToProps(state) {
  const mentors = state.groupReducer.people.map(
    (person, index) =>
      (state.loginReducer.uid === person.user && person.title === 'mentor' ? person.user : ''),
  );

  const isMentorValue = !!mentors.filter(mentor => mentor !== '').length;

  return {
    id: state.loginReducer.uid,
    isMentor: isMentorValue
  };
}

// CourseCard.propTypes = {
//   courseName: PropTypes.string.isRequired,
//   professorName: PropTypes.string.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
