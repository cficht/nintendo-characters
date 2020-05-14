import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../../selectors/characterSelector';
import { setDetail } from '../../actions/characterActions';
import { useParams } from 'react-router-dom';
import styles from './Detail.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector(getCharacter);

  useEffect(() => {
    dispatch(setDetail(id));
  }, []);

  return (
    <section className={styles.Detail}>
      <h2>{character.name}</h2>
      <img src={character.image} />
      <p>Species: {character.species}</p>
      <p>Creator: {character.creator}</p>
      <p>Quote: &quot;{character.quote}&quot;</p>
    </section>
  );
};

export default Detail;
