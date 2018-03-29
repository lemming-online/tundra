import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
import * as loginActions from '../actions/loginActions';
import GroupCard from '../components/GroupCard';
import SectionLevelBar from '../components/SectionLevelBar';
import GroupActionButtons from '../components/GroupActionButtons';
import CreateGroupButton from '../components/CreateGroupButton';

class LoggedInHome extends React.Component {
  componentDidMount() {
    // only run once
    if (this.props.groups.length === 0) {
      this.props.actions.getMyDetails();
    }
  }

  render() {
    console.log(this.props);
    return (
      <section className="section">
        <div className="container">
          <SectionLevelBar
            title="My Groups"
            loading={this.props.loading}
            error={this.props.detailError}
          >
            <GroupActionButtons />
          </SectionLevelBar>
          <div className="columns is-multiline is-mobile">
            {this.props.groups.map((group, index) => (
              <GroupCard
                key={index}
                groupName={group.name}
                groupID={group.group}
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
    detailError: state.loginReducer.detailError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHome);
