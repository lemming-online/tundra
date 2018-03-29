import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  addResourceToGroup,
  addResourceToGroupInProgress,
  cancelResource,
  getResourcesInGroup
} from '../actions/groupActions';
import InputComponent from '../components/InputComponent';

class ResourcesActionButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resourceDetails: {
        title: '',
        description: '',
        url: '',
      }
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    const nextResourceDetails = this.state.resourceDetails;
    nextResourceDetails[event.target.name] = event.target.value;
    return this.setState({ resourceDetails: nextResourceDetails });
  };

  onCancel = (e) => {
    e.preventDefault();
    this.props.cancelResource();
    this.clearInput();
  };

  onAddResourceSubmit = (e) => {
    e.preventDefault();
    const groupID = this.props.match.params.groupID;
    const body = this.state.resourceDetails;
    this.props.addResourceToGroup(body, groupID)
    this.props.getResourcesInGroup(`${this.props.match.params.groupID}`);
    this.clearInput();
  };

  addResourcePopup = () => {
    this.props.addingResource();
  };

  clearInput = () => {
    const nextResourceDetails = this.state.resourceDetails;
    nextResourceDetails['title'] = '';
    nextResourceDetails['description'] = '';
    nextResourceDetails['url'] = '';
    this.setState({ resourceDetails: nextResourceDetails });
  }

  render() {
    const modalActive = this.props.popup ? 'modal is-active' : 'modal';
    return (
      <div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button" onClick={this.addResourcePopup}>
              New Resource
            </button>
          </div>
        </div>
        <div id="resource-form-popup" className={`${modalActive}`}>
          <div className="modal-background" />
          <div className="container box">
            <h1 className="title">Add Resource</h1>
            <form>
              <InputComponent title="Title" name="title" value={this.state.resourceDetails.title} onChange={this.onChange} />
              <InputComponent title="Description" name="description" value={this.state.resourceDetails.description} onChange={this.onChange} />
              <InputComponent title="Link" name="url" value={this.state.resourceDetails.url} onChange={this.onChange} />

              <div className="field is-grouped">
                <div className="control">
                  <button className='button is-primary' onClick={this.onAddResourceSubmit}>
                    Add Resource
                  </button>
                </div>
                <div classname="control">
                  <button className="button" onClick={this.onCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popup: state.groupReducer.resourcePopup,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addResourceToGroup, dispatch),
    addResourceToGroup: (body, groupID) => {
      dispatch(addResourceToGroup(body, groupID));
    },
    addingResource: () => {
      dispatch(addResourceToGroupInProgress());
    },
    cancelResource: () => {
      dispatch(cancelResource());
    },
    getResourcesInGroup: (groupId) => {
      dispatch(getResourcesInGroup(groupId));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResourcesActionButtons));
