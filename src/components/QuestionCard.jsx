import React from 'react';
// import { Link } from 'react-router-dom';
import userBlank from '../images/user-blank.png';
// import PropTypes from 'prop-types';

function QuestionCard(props) {
  return (
    <div className="column is-4-desktop is-6-tablet is-12-mobile">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Question Title</p>
          <a role="button" className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fa fa-angle-down" aria-hidden="true" />
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          </div>
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
            <p className="name is-4">John Smith</p>
            <p className="location is-6">Seat H9</p>
          </div>
        </div>
        <footer className="card-footer">
          <a role="button" className="card-footer-item">
            Claim
          </a>
          <a role="button" className="card-footer-item">
            Edit
          </a>
          <a role="button" className="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
    </div>
  );
}

// CourseCard.propTypes = {
//   courseName: PropTypes.string.isRequired,
//   professorName: PropTypes.string.isRequired,
// };

export default QuestionCard;
