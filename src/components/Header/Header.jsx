import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSeries, setRandom } from '../../actions/characterActions';
import styles from './Header.css';

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRandom());
  }, []);

  return (
    <header className={styles.Header}>
      <h1>Nintendo Characters</h1>
      <nav>
        <Link to={'/'} onClick={() => dispatch(setRandom())}>Randomize</Link>
        <Link to={'/'} onClick={() => dispatch(setSeries('mario'))}>Mario</Link>
        <Link to={'/'} onClick={() => dispatch(setSeries('zelda'))}>Zelda</Link>
        <Link to={'/'} onClick={() => dispatch(setSeries('metroid'))}>Metroid</Link>
        <Link to={'/'} onClick={() => dispatch(setSeries('kirby'))}>Kirby</Link>
        <Link to={'/'} onClick={() => dispatch(setSeries('ac'))}>Animal Crossing</Link>
        <Link to={'/'} onClick={() => dispatch(setSeries('pikmin'))}>Pikmin</Link>
        <Link to={'/'} onClick={() => dispatch(setSeries('starfox'))}>Starfox</Link>
      </nav>
    </header>
  );
};


export default Header;
