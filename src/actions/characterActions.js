import { fetchRandom, fetchDetail } from '../services/nintendo';

export const SET_RANDOM = 'SET_RANDOM';
export const setRandom = () => dispatch => {
  return fetchRandom()
    .then(characters => {
      dispatch({
        type: SET_RANDOM,
        payload: characters
      });
    });
};

export const SET_DETAIL = 'SET_DETAIL';
export const setDetail = () => dispatch => {
  return fetchDetail()
    .then(character => {
      dispatch({
        type: SET_DETAIL,
        payload: character
      });
    });
};
