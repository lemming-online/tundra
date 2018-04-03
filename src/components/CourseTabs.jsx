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
        <Tab
          onClick={() => props.actions.changeTab('session', 'session')}
          className={props.pane_type === 'session' ? 'is-active' : ''}
        >
          Meetings
        </Tab>
        <Tab
          onClick={() => props.actions.changeTab('resources', 'resources')}
          className={props.pane_type === 'resources' ? 'is-active' : ''}
        >
          Resources
        </Tab>
        <Tab
          onClick={() => props.actions.changeTab('people', 'people')}
          className={props.pane_type === 'people' ? 'is-active' : ''}
        >
          People
        </Tab>

        {props.tabs.map(tab => (
          <Tab key={tab.id}
            onClick={() => props.actions.changeTab(tab.pane_type, tab.id)}
            className={props.openTab === tab.id ? 'is-active' : ''}
          >
            {tab.title}{' '}
            <button
              onClick={(event) => {
                event.stopPropagation();
                props.actions.closeTab(tab.pane);
              }}
              className="delete is-small tab-delete"
            />
          </Tab>
        ))}
      </Tabs>
    </TabCollection>
  );
}

function mapStateToProps(state) {
  return {
    pane_type: state.tabReducer.pane_type,
    tabs: state.tabReducer.tabs,
    openTab: state.tabReducer.openTab
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tabActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseTabs);
