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
          <SectionLevelBar title="Mentors" loading={this.props.peopleLoading}>
            <AddMentorToGroupButton />
          </SectionLevelBar>
          <div className="columns is-multiline is-mobile bordered">
            {/* this.getMentors(this.props.people, 'mentor') */}
            {this.props.people.map(
              (person, index) =>
                (person.title === 'mentor' ? (
                  <PersonComponent
                    key={index}
                    firstName={person.first_name}
                    lastName={person.last_name}
                    imgUrl={person.image}
                  />
                ) : null),
            )}
          </div>
          <SectionLevelBar title="Mentees" loading={this.props.peopleLoading}>
            <AddUserToGroupButtons />
          </SectionLevelBar>
          <div className="columns is-multiline is-mobile bordered">
            {this.props.people.map(
              (person, index) =>
                (person.title === 'mentee' ? (
                  <PersonComponent
                    key={index}
                    firstName={person.first_name}
                    lastName={person.last_name}
                  />
                ) : null),
            )}
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.groupReducer.people,
    peopleLoading: state.groupReducer.peopleLoading,
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
