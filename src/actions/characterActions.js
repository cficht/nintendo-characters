import { fetchRandom } from '../services/nintendo';

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
