import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import * as stuffActions from '../actions/stuffActions';

class stuffList extends React.Component {
  componentWillMount() {
    // HERE WE ARE TRIGGERING THE ACTION
    this.props.stuffActions.fetchStuff();
  }

  renderData() {
    return <div>{this.props.stuffs}</div>;
  }

  render() {
    return (
      <div className="container box">
        <p>
          This demo is to showcase work done with Redux. Redux will eventually be our event
          dispatcher.<br />
          <br />
        </p>
        {this.props.stuffs.length > 0 ? this.renderData() : <div className="">No Data</div>}
      </div>
    );
  }
}
stuffList.propTypes = {
  stuffActions: PropTypes.object,
  stuffs: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    stuffs: state.stuff,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    stuffActions: bindActionCreators(stuffActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(stuffList);
