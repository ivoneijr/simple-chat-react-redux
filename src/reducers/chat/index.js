import { fromJS } from 'immutable';

const CHAT = 'chat';

// Constants for the operations that can change the store.
const SET_PROPERTY = `${CHAT}/SET_PROPERTY`;
const ADD_MESSAGE = `${CHAT}/ADD_MESSAGE`;

const DEFAULT_STATE = fromJS({
  chat: {
    messages: [],
    text: '',
  },
});

/** It must interpret the action and return a new state. */
const reducer = (state = DEFAULT_STATE, action = {}) => {
  const types = {
    [SET_PROPERTY]: () =>
      state.setIn([CHAT, action.property], fromJS(action.data)),

    [ADD_MESSAGE]: () =>
      state.updateIn([CHAT, 'messages'], messages => messages.push(action.data)),

  };

  return (action.type in types) ? types[action.type]() : state;
};

/**
 * THUNK ACTION CREATORS
 */
export const fetchProperty = (property, data) => dispatch =>
  dispatch({ type: SET_PROPERTY, data, property });

export const addMessage = data => (dispatch) => {
  dispatch({ type: ADD_MESSAGE, data });
  dispatch({ type: SET_PROPERTY, data: '', property: 'text' });
};

export default reducer;
