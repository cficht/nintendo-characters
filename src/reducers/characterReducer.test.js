import { setRandom } from '../actions/characterActions';

describe.skip('characterReducer tests', () => {
  it('handles the SET_RANDOM action', () => {
    const state = {
      characters: []
    };
    const action = setRandom([
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
      }
    ]);
    const newState = (state, action);
    expect(newState).toMatchObject(() => ({
      characters: [
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
        }
      ]
    }));
  });
});
