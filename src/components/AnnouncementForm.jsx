import React from 'react';
import PropTypes from 'prop-types';
import InputComponent from '../components/InputComponent';

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

  onChange = (event) => {
    const nextAnnouncement = this.state.announcement;
    nextAnnouncement[event.target.name] = event.target.value;
    return this.setState({ announcement: nextAnnouncement });
  };

  render() {
    return (
      <section className="section">
        <div className="container box">
          <InputComponent title="Announcement" />

          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <button onClick={this.onSave} className="button is-primary">
                Make Announcement
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AnnouncementForm;
