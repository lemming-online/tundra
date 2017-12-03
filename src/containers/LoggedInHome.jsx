import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
import * as loginActions from '../actions/loginActions';
import CourseCard from '../components/CourseCard';
import SectionLevelBar from '../components/SectionLevelBar';
import GroupActionButtons from '../components/GroupActionButtons';
import CreateGroupButton from '../components/CreateGroupButton';

class LoggedInHome extends React.Component {
  componentDidMount() {
    // only run once
    if (this.props.groups.length === 0) {
      console.log('go!!');
      this.props.actions.getMyDetails();
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <SectionLevelBar title="My Groups" loading={this.props.loading}>
            <GroupActionButtons />
          </SectionLevelBar>

          <div className="columns is-multiline is-mobile">
            {this.props.groups.map((group, index) => (
              <CourseCard
                key={index}
                groupName={group.name}
                groupID={group.id}
                description={group.description}
              />
            ))}
          </div>
        </div>
        <br />
        <CreateGroupButton />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    uid: state.loginReducer.uid,
    firstName: state.loginReducer.firstName,
    lastName: state.loginReducer.lastName,
    loading: state.loginReducer.loading,
    groups: state.loginReducer.groups,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHome);
