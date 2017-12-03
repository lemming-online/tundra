import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayCreateGroupForm } from '../actions/groupActions';

function GroupActionButtons(props) {
  const onClick = () => {
    props.displayCreateGroupForm();
  };

  return (
    <div className="field is-grouped">
      <div className="control">
        <button className="button" onClick={onClick}>
          New Group
        </button>
      </div>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupActionButtons);
