import React from 'react';

import SectionLevelBar from '../components/SectionLevelBar';

const ArchivePage = (props) => {
  console.log(props);
  return (
    <section className="section">
      <div className="container">
        <SectionLevelBar title={props.session.data.title}>
          <h1><b>{props.session.data.date}</b></h1>
        </SectionLevelBar>

        <div className="box">
          <div className="content">
            <h2>Tickets: {props.session.data.tickets}</h2>
            <h2>Tickets Helped: {props.session.data.tickets_helped}</h2>
            <h2>Average Response Time: {props.session.data.average_response_time}</h2>
          </div>
        </div>

        <table className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>User</th>
              <th>Question</th>
              <th className="is-narrow">Helped</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(props.session.data.questions).map(
              (q, index) =>
                (q.question !== undefined ? (
                  <tr>
                    <td>{q.user.first_name}</td>
                    <td>{q.question}</td>
                    <td>{q.helped}</td>
                  </tr>
                ) : null),
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ArchivePage;