import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayCreateSectionForm } from '../actions/sectionActions';
import AdminPage from '../containers/AdminPage';

class CreateGroupButton extends React.Component {
  onClick = () => {
    console.log('temp');
    this.props.displayCreateSectionForm();
  };

  render() {
    const modalActive = this.props.popup ? 'modal is-active' : 'modal';

    return (
      <div className="button" onClick={this.onClick}>
        <h1 className="title">Create New Group</h1>
        <div id="announcement-form-popup" className={`${modalActive}`}>
          <AdminPage />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popup: state.sectionReducer.popup,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(displayCreateSectionForm, dispatch),
    displayCreateSectionForm: () => {
      dispatch(displayCreateSectionForm());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupButton);
