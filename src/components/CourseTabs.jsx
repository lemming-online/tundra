import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Tabs from '../components/Tabs';
import Tab from '../components/Tab';
import TabCollection from '../components/TabCollection';
import * as tabActions from '../actions/tabActions';

function CourseTabs(props) {
  return (
    <TabCollection>
      <Tabs>
        {/* TODO: refactor these into a single function */}

        <Tab
          onClick={() => props.actions.changeTab('session')}
          className={props.pane === 'session' ? 'is-active' : ''}
        >
          Meetings
        </Tab>
        <Tab
          onClick={() => props.actions.changeTab('resources')}
          className={props.pane === 'resources' ? 'is-active' : ''}
        >
          Resources
        </Tab>
        <Tab
          onClick={() => props.actions.changeTab('people')}
          className={props.pane === 'people' ? 'is-active' : ''}
        >
          People
        </Tab>
        <Tab
          onClick={() => props.actions.changeTab('admin')}
          className={props.pane === 'admin' ? 'is-active' : ''}
        >
          Admin
        </Tab>

        {props.tabs.map(tab => (
          <Tab
            onClick={() => props.actions.changeTab(tab.pane)}
            className={props.pane === tab.pane ? 'is-active' : ''}
          >
            {tab.title} <button className="delete is-small tab-delete" />
          </Tab>
        ))}
      </Tabs>
    </TabCollection>
  );
}

function mapStateToProps(state) {
  return {
    pane: state.tabReducer.pane,
    tabs: state.tabReducer.tabs,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tabActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseTabs);
