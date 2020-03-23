import { CityTypes, CityState } from './types';

const cityReducer = (state = CityState, { type, payload }) => {
  switch (type) {
    case CityTypes.CITY_REQUEST:
      return {
        ...state,
        cityRequest: true,
        citySuccess: false,
        cityFailure: false,
      };
    case CityTypes.CITY_SUCCESS:
      return {
        ...state,
        city: payload,
        cityRequest: false,
        citySuccess: true,
        cityFailure: false,
      };
    case CityTypes.CITY_FAILURE:
      return {
        ...state,
        cityRequest: true,
        citySuccess: false,
        cityFailure: true,
      };
    default:
      return { ...state };
  }
};

export default cityReducer;
