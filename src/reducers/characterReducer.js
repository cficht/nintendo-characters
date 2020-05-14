import { SET_RANDOM } from '../actions/characterActions';

const initialState = {
  characters: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_RANDOM:
      return action.payload;
    default:
      return state;
  }
}
