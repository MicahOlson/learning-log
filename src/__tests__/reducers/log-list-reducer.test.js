import Moment from 'moment';
import logListReducer from '../../reducers/log-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('logListReducer', () => {
  let action;

  const currentState = {
    1: {
      name: 'Ryan & Aimen',
      topic: '4b',
      notes: 'Redux action is not working correctly.',
      id: 1
    },
    2: {
      name: 'Jasmine and Justine',
      topic: '2a',
      notes: 'Reducer has side effects.',
      id: 2
    }
  }

  const logData = {
    name: 'Ryan & Aimen',
    topic: '4b',
    notes: 'Redux action is not working correctly.',
    timeOpen: 0,
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(logListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully delete a log', () => {
    action = {
      type: c.DELETE_LOG,
      id: 1
    };

    expect(logListReducer(currentState, action)).toEqual({
      2: {
        name: 'Jasmine and Justine',
        topic: '2a',
        notes: 'Reducer has side effects.',
        id: 2
      }
    });
  });

  test('Should add a formatted wait time to log entry', () => {
    const { name, topic, notes, timeOpen, id } = logData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(logListReducer({ [id] : logData }, action)).toEqual({
      [id] : {
        name: name,
        topic: topic,
        notes: notes,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });
});
