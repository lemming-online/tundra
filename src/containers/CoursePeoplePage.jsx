import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PersonComponent from '../components/PersonComponent';
import SectionLevelBar from '../components/SectionLevelBar';
import AddUserToGroupButtons from '../components/AddUserToGroupButtons';
import AddMentorToGroupButton from '../components/AddMentorToGroupButton';
import { getPeopleInGroup } from '../actions/groupActions';

class CoursePeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
    };
  }

  componentDidMount() {
    // only run once
    this.props.getPeopleInGroup(`${this.props.match.params.groupID}`);
  }

  getMentors(peopleJson, role) {}

  render() {
    return (
      <section className="section">
        <div className="container">
          <SectionLevelBar title="Mentors">
            <AddMentorToGroupButton />
          </SectionLevelBar>
          <div className="columns is-multiline is-mobile bordered">
            <PersonComponent firstName="Prof" lastName="Drizzy" />
            {/* this.getMentors(this.props.people, 'mentor') */}
            {this.props.people.map((person, index) => (
              <PersonComponent
                key={index}
                firstName={person.first_name}
                lastName={person.first_name}
              />
            ))}
          </div>
          <SectionLevelBar title="Mentees">
            <AddUserToGroupButtons />
          </SectionLevelBar>
          <div className="columns is-multiline is-mobile bordered">
            <PersonComponent firstName="Temp" lastName="Temp" />
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.groupReducer.people,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(getPeopleInGroup, dispatch),
    getPeopleInGroup: (groupId) => {
      dispatch(getPeopleInGroup(groupId));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CoursePeoplePage));
