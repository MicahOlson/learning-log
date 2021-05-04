import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('help queue actions', () => {
  it('deleteLog should create DELETE_LOG action', () => {
    expect(actions.deleteLog(1)).toEqual({
      type: c.DELETE_LOG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('updateTime should create UPDATE_TIME action', () => {
    expect(actions.updateTime(1, "A few seconds")).toEqual({
      type: c.UPDATE_TIME,
      id: 1,
      formattedWaitTime: "A few seconds"
    });
  });
});
