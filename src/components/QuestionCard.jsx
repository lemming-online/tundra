import React from 'react';
// import PropTypes from 'prop-types';

function CourseCard(props) {
  return (
    <div className="tile is-ancestor is-4">
      <div className="tile is-parent">
        <article className="tile is-child box">
          <div className="content">
            <p className="title">
              <a href="/">What is my question?</a>
            </p>
            <p>
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
              anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making this the first true
              generator on the Internet?
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

// CourseCard.propTypes = {
//   courseName: PropTypes.string.isRequired,
//   professorName: PropTypes.string.isRequired,
// };

export default CourseCard;
