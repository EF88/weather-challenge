import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CityTypes } from '../store/cities/types';
import DayWeather from '../components/DayCard/DayCard';
import { WeatherSection, MenuCities, ButtonCities } from './MainPage.style';
import Spinner from '../components/SpinnerLoading/spinner.style';

const MainPage = () => {
  const dispatch = useDispatch();
  const { city: {consolidated_weather: days=[]}, cityRequest, cityFailure } = useSelector(
    state => state.cityState,
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
      type: CityTypes.CITY_REQUEST,
      codeCity: code
    });
  }

  useEffect(() => {
    dispatch({
      type: CityTypes.CITY_REQUEST,
      codeCity: menuButtons[0].code
    });
  }, []);

  const renderNoWeather = () => {
    if (cityFailure) return <h1>Something went wrong to found the Weather</h1>;
    else if (cityRequest) return <Spinner />;
  };

  const renderDays = () => {
    return (
      <WeatherSection>
        {days && days.length > 0 && !cityRequest
         ? days.map( city => <DayWeather infoCity={city}/>)
         : renderNoWeather()
         }
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
