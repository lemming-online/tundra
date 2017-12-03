import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';
import announcementReducer from './announcementReducer';
import feedbackReducer from './feedbackReducer';
import groupReducer from './groupReducer';
import sessionReducer from './sessionReducer';
import tabReducer from './tabReducer';

const rootReducer = combineReducers({
  loginReducer,
  registrationReducer,
  announcementReducer,
  feedbackReducer,
  groupReducer,
  sessionReducer,
  tabReducer,
});

export default rootReducer;
