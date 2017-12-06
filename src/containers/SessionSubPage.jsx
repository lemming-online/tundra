import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import InstructorMeetingButtons from '../components/InstructorMeetingButtons';
import ArchiveSessionButton from '../components/ArchiveSessionButton';
import * as tabActions from '../actions/tabActions';
import SectionLevelBar from '../components/SectionLevelBar';

class SessionPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionDetails: {},
    };
  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <SectionLevelBar title="Meetings" live>
              <InstructorMeetingButtons />
            </SectionLevelBar>

            <ul>
              <a
                role="link"
                tabIndex={0}
                onClick={() => this.props.actions.openTab('lab3', 'Lab 3: Beginner Vaporization')}
              >
                <li>Lab 3: Beginner Vaporization</li>
              </a>
            </ul>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionLevelBar title="Archive">
              <ArchiveSessionButton />
            </SectionLevelBar>
            <ul>
              <a
                role="link"
                tabIndex={0}
                onClick={() => this.props.actions.openTab('lab2', 'Lab 2: Yeup')}
              >
                <li>Lab 2: Budding Out</li>
              </a>
              <Link to="/">
                <li>Lab 1: Lab Preparation</li>
              </Link>
              <Link to="/">
                <li>Lab 0: Hello World</li>
              </Link>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tabs: state.tabReducer.tabs };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tabActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionPage);
