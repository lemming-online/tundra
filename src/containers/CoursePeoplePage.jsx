import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PersonComponent from '../components/PersonComponent';
import SectionLevelBar from '../components/SectionLevelBar';
import AddUserToGroupButtons from '../components/AddUserToGroupButtons';
import AddMentorToGroupButton from '../components/AddMentorToGroupButton';
import ViewIfMentor from '../components/ViewIfMentor';
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
      <div className="container">
        <section className="section">
          <SectionLevelBar title="Mentors" loading={this.props.peopleLoading}>
            <ViewIfMentor isMentor={this.props.isMentor}>
              <AddMentorToGroupButton />
            </ViewIfMentor>
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
                    imgUrl={person.image !== '' ? `//${person.image}` : null}
                  />
                ) : null),
            )}
          </div>
        </section>
        <section className="section">
          <SectionLevelBar title="Mentees" loading={this.props.peopleLoading}>
            <ViewIfMentor isMentor={this.props.isMentor}>
              <AddUserToGroupButtons />
            </ViewIfMentor>
          </SectionLevelBar>
          <div className="columns is-multiline is-mobile bordered">
            {this.props.people.map(
              (person, index) =>
                (person.title === 'mentee' ? (
                  <PersonComponent
                    key={index}
                    firstName={person.first_name}
                    lastName={person.last_name}
                    imgUrl={person.image !== '' ? `//${person.image}` : null}
                  />
                ) : null),
            )}
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.groupReducer.people,
    peopleLoading: state.groupReducer.peopleLoading,
    isMentor: state.groupReducer.people.title,
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
