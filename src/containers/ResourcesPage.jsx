import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SectionLevelBar from '../components/SectionLevelBar';
import ResourcesActionButtons from '../components/ResourcesActionButtons';
import { getResourcesInGroup } from '../actions/groupActions';
import ViewIfMentor from '../components/ViewIfMentor';

class ResourcesPage extends React.Component {
  componentDidMount() {
    // only run once
    this.props.getResourcesInGroup(`${this.props.match.params.groupID}`);
  }

  render() {
    const hasResources = this.props.resources.length;

    if (hasResources > 0) {
      return (
        <section className="section">
          <div className="container">
            <SectionLevelBar title="Resources">
              <ResourcesActionButtons />
            </SectionLevelBar>
            <table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th className="is-narrow">Link</th>
                </tr>
              </thead>
              <tbody>
                {this.props.resources.map((resource, index) => (
                  <tr>
                    <td>{resource.title}</td>
                    <td>{resource.description}</td>
                    <td className="has-text-centered">
                      <span className="icon">
                        <a href={`${resource.url}`} target="_blank">
                          <i className="fa fa-external-link" aria-hidden="true" />
                        </a>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );
    }
    return (
      <section className="section">
        <div className="container">
          <SectionLevelBar title="Resources">
            <ViewIfMentor isMentor={this.props.isMentor}>
              <ResourcesActionButtons />
            </ViewIfMentor>
          </SectionLevelBar>
          No resources.
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const mentors = state.groupReducer.people.map(
    (person, index) =>
      (state.loginReducer.uid === person.user && person.title === 'mentor' ? person.user : ''),
  );

  const isMentorValue = !!mentors.filter(mentor => mentor !== '').length;

  return {
    resources: state.groupReducer.resources,
    resourcesLoading: state.groupReducer.resourcesLoading,
    isMentor: isMentorValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(getResourcesInGroup, dispatch),
    getResourcesInGroup: (groupId) => {
      dispatch(getResourcesInGroup(groupId));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResourcesPage));
