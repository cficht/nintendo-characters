import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomCharacters } from '../../selectors/characterSelector';
import { setRandom } from '../../actions/characterActions';
import { Link } from 'react-router-dom';

const List = () => {
  const dispatch = useDispatch();
  const characters = useSelector(getRandomCharacters);

  useEffect(() => {
    dispatch(setRandom());
  }, []);

  const characterNodes = characters.map((char) => 
    (<li key={char._id}>
      <Link to={`/detail/${char._id}`}><h3>{char.name}</h3></Link>
      <img src={char.image}/>
      <p>{char.first_appearance}</p>
    </li>
    ));

  return (
    <>
      <ul>
        {characterNodes}
      </ul>   
    </>
  );
};

export default List;
