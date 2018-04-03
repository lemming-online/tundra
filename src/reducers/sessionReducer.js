import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  hasCreatedQuestion: false,
  sessionFormPopup: false,
  hasSession: false,
  liveSession: [],
  archivedSessions: [],
  queue: [],
  inQueue: false
};

export default function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CREATE_SESSION:
      return {
        ...state,
        hasSession: true,
        liveSession: action.json,
        sessionFormPopup: false,
      };
    case types.DISPLAY_CREATE_SESSION_FORM:
      return {
        ...state,
        sessionFormPopup: true,
      };

    case types.CLOSE_CREATE_SESSION_FORM:
      return {
        ...state,
        sessionFormPopup: false,
      };

    case types.HELP_QUESTION_SUCCESS:
      console.log('Successfully created question');
      console.log(action.json);
      console.log(state.queue);
      return {
        ...state,
        hasCreatedQuestion: true,
        inQueue: true
      };

    case types.HELP_QUESTION_FAILURE:
      console.log('Question was not created.');
      return {
        ...state,
      };

    case types.DELETE_QUESTION_SUCCESS:
      var i;
      var newQueue = [];

      for (i = 0; i < state.queue.length; i++) {
        if (state.queue[i].question.user !== action.userId) {
          newQueue.push([state.queue[i]]);
        }
      }

      return {
        ...state,
        hasCreatedQuestion: false,
        queue: newQueue,
        inQueue: false
      };

    case types.REMOVE_QUESTION_FAILURE:
      console.log('Question was not deleted.');
      return {
        ...state,
      };

    case types.REMOVE_QUESTION_SUCCESS:
      var newQueue = [];

      for (i = 0; i < state.queue.length; i++) {
        if (state.queue[i].question.user !== action.userId) {
          newQueue.push([state.queue[i]]);
        }
      }

      return {
        ...state,
        hasCreatedQuestion: false,
        queue: newQueue,
        inQueue: false
      };

    case types.DELETE_QUESTION_FAILURE:
      console.log('Question was not deleted.');
      return {
        ...state,
      };

    case types.ARCHIVE_SESSION:
      return {
        ...state,
        hasSession: false,
        liveSession: [],
        archivedSessions: action.json,
        queue: [],
        hasCreatedQuestion: false
      };

    case types.GET_LIVE_SESSION:
      var waiting = false;

      if (action.json.queue !== undefined) {
        for (i = 0; i < action.json.queue.length; i++) {
          if (action.json.uid === action.json.queue[i].question.user) {
            waiting = true;
            break;
          }
        }

        return {
          ...state,
          liveSession: action.json,
          queue: action.json.queue,
          inQueue: waiting
        };
      }
      else {
        return {
          ...state,
          liveSession: action.json,
          queue: [],
          inQueue: waiting
        };
      }

    case types.GET_ARCHIVED_SESSIONS:
      return {
        ...state,
        archivedSessions: action.json,
      };

    case types.UPDATE_QUEUE:
      return {
        ...state,
        queue: action.newQueue.queue
      };

    default:
      return state;
  }
}
