import { LondonTypes, LondonState } from './types';

const londonReducer = (state = LondonState, { type, payload }) => {
  switch (type) {
    case LondonTypes.LONDON_REQUEST:
      return {
        ...state,
        londonRequest: true,
        londonSuccess: false,
        londonFailure: false,
      };
    case LondonTypes.LONDON_SUCCESS:
      return {
        ...state,
        london: payload,
        londonRequest: false,
        londonSuccess: true,
        londonFailure: false,
      };
    case LondonTypes.LONDON_FAILURE:
      return {
        ...state,
        londonRequest: true,
        londonSuccess: false,
        londonFailure: true,
      };
    case LondonTypes.LONDON_FILTER:
      let londonFiltered = [];
      if (state.london && state.london.length > 0)
        londonFiltered = state.london.filter(london =>
          london.name.toLowerCase().includes(payload.toLowerCase()),
        );

      return {
        ...state,
        londonFiltered: [...londonFiltered],
      };
    default:
      return { ...state };
  }
};

export default londonReducer;
