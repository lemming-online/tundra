import React from 'react';
import Card from './Card';

class ViewAnnouncementsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      announcementContent: {},
    };
  }

  render() {
    return (
      <div>
        <Card content="Ankit goes" title="TITLE" timestamp="7:00 PM on a Tuesday" />
        <Card content="2nd Card" title="No time for games" />
      </div>
    );
  }
}

export default ViewAnnouncementsComponent;
