import React from 'react';
import { shallow } from 'enzyme';
import { DarkMode } from '../DarkMode';

describe('<DarkMode /> component', () => {
  test('render dark mode toggle', () => {
    const DarkModeWrapper = shallow(<DarkMode />);
    expect(DarkModeWrapper.find('#checkbox')).toHaveLength(1);
  });
});
