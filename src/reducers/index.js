import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import formVisibleReducer from './form-visible-reducer';
import logListReducer from './log-list-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainLogList: logListReducer,
  firestore: firestoreReducer
});

export default rootReducer;
