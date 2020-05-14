import React from 'react';
import { useSelector } from 'react-redux';
import { getCharacters } from '../../selectors/characterSelector';
import { Link } from 'react-router-dom';
import styles from './List.css';

const List = () => {
  const characters = useSelector(getCharacters);

  const characterNodes = characters.map((char) => 
    (<li key={char._id}>
      <Link to={`/detail/${char._id}`}><h3>{char.name}</h3></Link>
      <img src={char.image}/>
      <p>{char.first_appearance}</p>
    </li>
    ));

  return (
    <section className={styles.List}>
      <ul>
        {characterNodes}
      </ul>   
    </section>
  );
};

export default List;
