import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayCreateSectionForm } from '../actions/sectionActions';

function GroupActionButtons(props) {
  const onClick = () => {
    props.displayCreateSectionForm();
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupActionButtons);
