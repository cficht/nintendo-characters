import { setRandom } from './characterActions';

describe.skip('characterActions testing', () => {
  it('creates a setRandom action', () => {
    const action = setRandom();
    expect(action).toMatchObject(() => {});
  });
});
