import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputComponent from '../components/InputComponent';
import createAnnouncement from '../actions/announcementActions';

class AnnouncementForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      announcement: {
        content: '',
      },
    };

    // TODO: are these binds needed?
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onSave = (event) => {
    event.preventDefault();
    // this.props.actions.logInUser(this.state.announcement);
    // onSave call the action that will create announcements
  };

  onSelect = () => {
    this.props.createAnnouncement(this.state.announcement);
    this.forceUpdate();
  };

  // keeps track of text changes
  onChange = (event) => {
    const nextAnnouncement = this.state.announcement;
    nextAnnouncement[event.target.name] = event.target.value;
    return this.setState({ announcement: nextAnnouncement });
  };

  render() {
    const modalActive = this.props.popup ? 'modal is-active' : 'modal';
    return (
      <div>
        <button className="button is-primary" onClick={this.onSelect}>
          {modalActive}
        </button>

        <div id="announcement-form-popup" className={`${modalActive}`}>
          <h1>{this.props.popup}</h1>
          <div className="modal-background" />
          <section className="section">
            <div className="container box">
              <InputComponent name="content" title="New Announcement" onChange={this.onChange} />
              <div className="field is-grouped is-grouped-right">
                <div className="control">
                  <button onClick={this.onSave} className="button is-primary">
                    Create
                  </button>
                </div>
              </div>
              <button className="modal-close" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popup: state.announcementReducer.popup,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(createAnnouncement, dispatch),
    createAnnouncement: (announcement) => {
      dispatch(createAnnouncement(announcement));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementForm);
