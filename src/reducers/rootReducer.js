import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';
import announcementReducer from './announcementReducer';

const rootReducer = combineReducers({
  loginReducer,
  registrationReducer,
  announcementReducer,
});

export default rootReducer;
