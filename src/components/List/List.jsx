import React from 'react';
// import PropTypes from 'prop-types';

const List = () => {
  const chars = [
    {
      _id: '5ebc8efe301bdab1fad1b3f7',
      name: 'Kass',
      first_appearance: 'The Legend of Zelda: Breath of the Wild',
      quote: null,
      species: 'Rito',
      creator: null,
      image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d4/BotW_Kass.png/revision/latest/scale-to-width-down/310?cb=20170701213846&path-prefix=en'
    },
    {
      _id: '5ebc8efe301bdab1fad1b419',
      name: 'Medli',
      first_appearance: 'The Legend of Zelda: The Wind Waker',
      quote: null,
      species: 'Rito',
      creator: 'Nintendo',
      image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d5/Medli.png/revision/latest/scale-to-width-down/310?cb=20150510025028&path-prefix=en'
    },
    {
      _id: '5ebc8efe301bdab1fad1b33e',
      name: 'Cappy',
      first_appearance: 'Super Mario Odyssey (2017)',
      quote: null,
      species: 'Bonneter',
      creator: 'Nintendo EPD',
      image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1a/SMO_Cappy.png/revision/latest/scale-to-width-down/310?cb=20170613185827&path-prefix=en'
    }
  ];

  const characterNodes = chars.map((char) => 
    (<li key={char._id}>
      <h3>{char.name}</h3>
      <img src={char.image}/>
      <p>{char.first_appearance}</p>
    </li>
    ));

  console.log(chars);

  return (
    <>
      <h1>LIST</h1>
      <ul>
        {characterNodes}
      </ul>   
    </>
  );
};

// List.propTypes = {};

export default List;
