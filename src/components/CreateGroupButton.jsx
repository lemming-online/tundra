import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayCreateGroupForm } from '../actions/groupActions';
import AdminPage from '../containers/AdminPage';

class CreateGroupButton extends React.Component {
  onClick = () => {
    this.props.displayCreateGroupForm();
  };

  render() {
    const modalActive = this.props.popup ? 'modal is-active' : 'modal';

    return (
      <div>
        <div id="announcement-form-popup" className={`${modalActive}`}>
          <AdminPage />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popup: state.groupReducer.popup,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(displayCreateGroupForm, dispatch),
    displayCreateGroupForm: () => {
      dispatch(displayCreateGroupForm());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupButton);
