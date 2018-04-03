import React from 'react';

import SectionLevelBar from '../components/SectionLevelBar';

const ArchivePage = (props) => {
  console.log('HERERERE');
  console.log(props);
  return (
    <section className="section">
      <div className="container">
        <SectionLevelBar title={props.session.data.title}>
          <h1><b>{props.session.data.date}</b></h1>
        </SectionLevelBar>

        <div className="box">
          <div className="content">
            <h2>Tickets Helped: {props.session.data.tickets_helped}</h2>
          </div>
        </div>

        <table className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Titl</th>
              <th>Description</th>
              <th className="is-narrow">Link</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ArchivePage;