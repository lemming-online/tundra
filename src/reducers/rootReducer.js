import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';
import announcementReducer from './announcementReducer';
import feedbackReducer from './feedbackReducer';

const rootReducer = combineReducers({
  loginReducer,
  registrationReducer,
  announcementReducer,
  feedbackReducer,
});

export default rootReducer;
