import React from 'react';
// import PropTypes from 'prop-types';

const Detail = () => {
  const character = {
    _id: '5ebc8efe301bdab1fad1b3f7',
    name: 'Kass',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: null,
    species: 'Rito',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d4/BotW_Kass.png/revision/latest/scale-to-width-down/310?cb=20170701213846&path-prefix=en'
  };

  return (
    <>
      <h2>{character.name}</h2>
      <img src={character.image} />
      <p>Species: {character.species}</p>
      <p>Creator: {character.creator}</p>
      <p>Quote: {character.quote}</p>
    </>
  );
};

// Detail.propTypes = {};

export default Detail;
