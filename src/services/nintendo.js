export const fetchRandom = () => {
  return fetch('https://the-nintendo-api.herokuapp.com/api/v1/characters')
    .then(res => res.json());
};
