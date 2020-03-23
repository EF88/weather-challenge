import React from 'react';
import { shallow } from 'enzyme';
import DayWeather from '../DayWeather';

describe('DayWeather', () => {

  const infoCity = {
    id: 5093304490262528,
    weather_state_name: "Heavy Cloud",
    weather_state_abbr: "hc",
    wind_direction_compass: "NE",
    created: "2020-03-23T10:36:49.295931Z",
    applicable_date: "2020-03-23",
    min_temp: 10.254999999999999,
    max_temp: 19.265,
    the_temp: 19.655,
    wind_speed: 5.0632496426071745,
    wind_direction: 46.385905633869974,
    air_pressure: 1013.5,
    humidity: 64,
    visibility: 13.390238507118427,
    predictability: 71
  }

  const setup = props => {
    return shallow(<DayWeather infoCity={ props } />);
  };

  it('shallow without fail', () => {
    setup(infoCity);
  });

  it('matches the snapshot', () => {
    const wrapper = setup(infoCity);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
