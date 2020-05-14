import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomCharacters } from '../../selectors/characterSelector';
import { setRandom } from '../../actions/characterActions';
// import PropTypes from 'prop-types';

const List = () => {
  const dispatch = useDispatch();
  const characters = useSelector(getRandomCharacters);

  useEffect(() => {
    dispatch(setRandom());
  }, []);

  const characterNodes = characters.map((char) => 
    (<li key={char._id}>
      <h3>{char.name}</h3>
      <img src={char.image}/>
      <p>{char.first_appearance}</p>
    </li>
    ));

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
