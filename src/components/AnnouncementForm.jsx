import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputComponent from '../components/InputComponent';
import { createAnnouncement, closeAnnouncement } from '../actions/announcementActions';

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
  }

  onSubmit = () => {
    console.log(this.state.announcement.content);
    this.props.submitAnnouncement(this.state.announcement.content);
  };

  onCancel = () => {
    this.props.closeAnnouncement(this.state.announcement.content);
  };

  onSelect = () => {
    this.props.createAnnouncement(this.state.announcement.content);
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
          Create Announcement
        </button>

        <div id="announcement-form-popup" className={`${modalActive}`}>
          <div className="modal-background" />
          <section className="section">
            <div className="container box">
              <InputComponent name="content" title="New Announcement" onChange={this.onChange} />
              <div className="field is-grouped is-grouped-right">
                <div className="control">
                  <button onClick={this.onSubmit} className="button is-primary">
                    Create
                  </button>
                  <button onClick={this.onCancel} className="button is-primary">
                    Cancel
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
    submitAnnouncement: (announcement) => {
      dispatch(closeAnnouncement(announcement));
    },
    closeAnnouncement: (announcement) => {
      dispatch(closeAnnouncement(announcement));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementForm);
