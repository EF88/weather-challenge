import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LondonTypes } from '../store/london/types';
import DayWeather from '../components/DayCard/DayCard';
import { WeatherSection, MenuCities, ButtonCities } from './MainPage.style';

const MainPage = () => {
  const dispatch = useDispatch();
  const { london: {consolidated_weather: days=[]}, londonRequest, londonFailure } = useSelector(
    state => state.londonState,
  );
  const menuButtons = [
    {
      name: 'Lisbon',
      code: '742676'
    },
    {
      name: 'London',
      code: '44418'
    },
    {
      name: 'New York',
      code: '2459115'
    },
    {
      name: 'Sao Paulo',
      code: '455827'
    }
  ];

  const handleOnClick = code => () => {
    dispatch({
      type: LondonTypes.LONDON_REQUEST,
      codeCity: code
    });
  }

  useEffect(() => {
    dispatch({
      type: LondonTypes.LONDON_REQUEST,
      codeCity: menuButtons[0].code
    });
  }, []);

  const renderDays = () => {
    return (
      <WeatherSection>
        { days.map( city => <DayWeather infoCity={city}/>)}
      </WeatherSection>
    );
  };

  return (
    <>
      <MenuCities>
      { menuButtons.map(({name, code}) => <div><ButtonCities onClick={handleOnClick(code)}>{name}</ButtonCities></div>)}
      </MenuCities>
      {renderDays()}
    </>
  );
};

export default MainPage;
