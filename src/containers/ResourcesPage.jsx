import React from 'react';
import SectionLevelBar from '../components/SectionLevelBar';
import ResourcesActionButtons from '../components/ResourcesActionButtons';

function ResourcesPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionLevelBar title="Resources">
          <ResourcesActionButtons />
        </SectionLevelBar>
        <table className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th className="is-narrow">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Scholar</td>
              <td>Google Scholar is an search engine for academic papers.</td>
              <td className="has-text-centered">
                <span className="icon">
                  <a href="https://scholar.google.com/">
                    <i className="fa fa-external-link" aria-hidden="true" />
                  </a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ResourcesPage;
