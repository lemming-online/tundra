import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  addResourceToGroup,
  addResourceToGroupInProgress,
  cancelResource,
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
      },
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    const nextResourceDetails = this.state.resourceDetails;
    nextResourceDetails[event.target.name] = event.target.value;
    return this.setState({ resourceDetails: nextResourceDetails });
  };

  onCancel = () => {
    this.props.cancelResource();
  };

  onAddResourceSubmit = (event) => {
    event.preventDefault();
    const groupID = this.props.match.params.groupID;
    const body = this.state.resourceDetails;
    console.log(body);
    console.log(`GROUPID: ${groupID}`);
    this.props.addResourceToGroup(body, groupID);
    console.log('Submiting Resource2222');
  };

  addResourcePopup = () => {
    this.props.addingResource();
    console.log('pop goes the weasel666');
  };

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
              <InputComponent title="Title" name="title" onChange={this.onChange} />
              <InputComponent title="Description" name="description" onChange={this.onChange} />
              <InputComponent title="Link" name="url" onChange={this.onChange} />

              <div className="field is-grouped is-grouped-right">
                <div className="control">
                  <button
                    onClick={event => this.onAddResourceSubmit(event)}
                    className={'button is-primary'}
                  >
                    Add Resource
                  </button>
                </div>
                <div className="control">
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
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResourcesActionButtons));
