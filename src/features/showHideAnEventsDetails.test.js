import { defineFeature, loadFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import React from 'react';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  let AppWrapper;

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user has started the app', () => {
      AppWrapper = mount(<App />);
    });

    when("the user doesn't click on an event", () => {});

    then('the event details will be collapsed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event-details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({
    given,
    when,
    then,
  }) => {
    given('the user has started the app', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on an event', () => {
      AppWrapper.update();
      AppWrapper.find('.btn-details').at(0).simulate('click');
    });

    then('the event details will expand', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event-details').text()).toEqual(
        mockData[0].description
      );
    });
  });

  test('User can collapse an event to hide its details', ({
    given,
    when,
    then,
  }) => {
    let EventWrapper;
    given('the user has expanded the details of an event', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({ collapsed: false });
    });

    when('the user clicks on the event details', () => {
      EventWrapper.update();
      EventWrapper.find('.btn-details').simulate('click');
    });

    then('the event details will collapse', () => {
      expect(EventWrapper.state('collapsed')).toBe(true);
      expect(EventWrapper.find('.event-details')).toHaveLength(0);
    });
  });
});
