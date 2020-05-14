export const fetchRandom = () => {
  return fetch('https://the-nintendo-api.herokuapp.com/api/v1/characters')
    .then(res => res.json());
};

export const fetchDetail = (id) => {
  return fetch(`https://the-nintendo-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json());
};
