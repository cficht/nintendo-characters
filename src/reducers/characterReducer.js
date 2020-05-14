import { SET_RANDOM, SET_DETAIL } from '../actions/characterActions';

const initialState = {
  characters: [],
  character: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_RANDOM:
      state.characters = action.payload;
      return state;
    case SET_DETAIL:
      state.character = action.payload;
      return state;
    default:
      return state;
  }
}
