import { defineFeature, loadFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import React from 'react';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  let AppWrapper;

  test("When user hasn't specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given('the user is on the main page', () => {
      AppWrapper = mount(<App />);
    });

    when('the user has not specified the numbers of events', () => {});

    then('the default number of displayed events will be 32', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({
    given,
    when,
    then,
  }) => {
    given('the user is on the main page', () => {
      AppWrapper = mount(<App />);
    });

    when('the user changes the number of events', () => {
      AppWrapper.find('#events-number').simulate('change', {
        target: { value: 10 },
      });
    });

    then('the number of events will change accordingly', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(10);
    });
  });
});
