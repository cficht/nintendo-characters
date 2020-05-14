import { SET_RANDOM } from '../actions/characterActions';

const initialState = {
  characters: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_RANDOM:
      state.characters = action.payload;
      return state;
    default:
      return state;
  }
}
