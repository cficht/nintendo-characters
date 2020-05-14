import marioplaceholder from '../assets/marioplaceholder.png';

export const fetchRandom = () => {
  return fetch('https://the-nintendo-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(res => res.map(character => {
      return {
        _id: character._id,
        name: character.name,
        first_appearance: character.first_appearance,
        quote: character.quote ? character.quote : 'No quote available.',
        species: character.species ? character.species : '???',
        creator: character.creator ? character.creator : '???',
        image: character.image ? character.image : marioplaceholder
      };
    }));
};

export const fetchDetail = (id) => {
  return fetch(`https://the-nintendo-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json())
    .then(res => {
      return {
        _id: res._id,
        name: res.name,
        first_appearance: res.first_appearance,
        quote: res.quote ? res.quote : 'No quote available.',
        species: res.species ? res.species : '???',
        creator: res.creator ? res.creator : '???',
        image: res.image ? res.image : marioplaceholder
      };
    });
};

export const fetchSeries = (series) => {
  return fetch(`https://the-nintendo-api.herokuapp.com/api/v1/characters/${series}`)
    .then(res => res.json())
    .then(res => res.map(character => {
      return {
        _id: character._id,
        name: character.name,
        first_appearance: character.first_appearance,
        quote: character.quote ? character.quote : 'No quote available.',
        species: character.species ? character.species : '???',
        creator: character.creator ? character.creator : '???',
        image: character.image ? character.image : marioplaceholder
      };
    }));
};
