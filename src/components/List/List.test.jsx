import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import { Provider } from 'react-redux';
import store from '../../store';

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <List />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
