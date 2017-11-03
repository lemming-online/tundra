import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';
import announcementReducer from './announcementReducer';
import feedbackReducer from './feedbackReducer';
import sectionReducer from './sectionReducer';

const rootReducer = combineReducers({
  loginReducer,
  registrationReducer,
  announcementReducer,
  feedbackReducer,
  sectionReducer,
});

export default rootReducer;
