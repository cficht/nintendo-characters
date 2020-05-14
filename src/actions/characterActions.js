import { fetchRandom, fetchDetail, fetchSeries } from '../services/nintendo';

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
export const setDetail = (id) => dispatch => {
  return fetchDetail(id)
    .then(character => {
      dispatch({
        type: SET_DETAIL,
        payload: character
      });
    });
};

export const SET_SERIES = 'SET_SERIES';
export const setSeries = (series) => dispatch => {
  return fetchSeries(series)
    .then(characters => {
      dispatch({
        type: SET_SERIES,
        payload: characters
      });
    });
};
