import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';
import announcementReducer from './announcementReducer';
import feedbackReducer from './feedbackReducer';
import groupReducer from './groupReducer';
import sessionReducer from './sessionReducer';
import tabReducer from './tabReducer';
import * as types from '../actions/actionTypes';

const appReducer = combineReducers({
  loginReducer,
  registrationReducer,
  announcementReducer,
  feedbackReducer,
  groupReducer,
  sessionReducer,
  tabReducer,
});

const rootReducer = (state, action) => {
  if (action.type === types.LOG_OUT) {
    state = undefined;
  }

  return appReducer(state, action)
}

export default rootReducer;
