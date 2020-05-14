import React from 'react';
import { shallow } from 'enzyme';
import Detail from './Detail';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Detail component', () => {
  it('renders Detail', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Detail />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
