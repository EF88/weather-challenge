import React from 'react';
import PropTypes from 'prop-types';

import { DayCard, Divider, ConditionsSection, ConditionLabel } from './DayCard.style';

const DayWeather = ({ infoCity }) => {
  const { applicable_date, weather_state_abbr, the_temp, min_temp, max_temp, wind_speed, wind_direction_compass, predictability } = infoCity;
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var d = new Date(applicable_date);
  var n = weekday[d.getDay()];

  const icon =`https://www.metaweather.com//static/img/weather/${ weather_state_abbr }.svg`;

  return infoCity ? (
    <DayCard>
      <h4>{ n }</h4>
      <img src={ icon } alt="Smiley face" height="42" width="42"></img>
      <h1>{ the_temp.toFixed() }°</h1>
      <Divider />
      <ConditionsSection>
        <ConditionLabel>min<div>{ min_temp.toFixed() }°</div></ConditionLabel>
        <ConditionLabel>max<div>{ max_temp.toFixed() }°</div></ConditionLabel>
      </ConditionsSection>
      <ConditionsSection>
        <ConditionLabel>wind speed<div>{ wind_speed.toFixed() }°</div></ConditionLabel>
        <ConditionLabel>wind dir<div>{ wind_direction_compass }</div></ConditionLabel>
      </ConditionsSection>
      <Divider />
      <h5>predictability</h5>
      <h3>{ predictability }%</h3>
    </DayCard>
  ) : (
    <div>Weather Not Found</div>
  );
};

DayWeather.prototype = {
  infoCity: PropTypes.object,
};

export default DayWeather;
