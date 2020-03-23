import cityReducer from '../reducer';
import { CityTypes, CityState } from '../types';


describe('City Reducer', () => {
  it('city request', () => {
    const mockAction = { type: CityTypes.CITY_REQUEST };
    const mockExpectResponse = { city: [], cityRequest: true, citySuccess: false, cityFailure: false };
    const reducerResponse = cityReducer(CityState, mockAction);

    expect(reducerResponse).toEqual(mockExpectResponse);
  });

  it('city request success', () => {
    const mockAction = { type: CityTypes.CITY_SUCCESS };
    const mockExpectResponse = { city: undefined, cityRequest: false, citySuccess: true, cityFailure: false };
    const reducerResponse = cityReducer(CityState, mockAction);

    expect(reducerResponse).toEqual(mockExpectResponse);
  });

  it('city request failure', () => {
    const mockAction = { type: CityTypes.CITY_FAILURE };
    const mockExpectResponse = { city: [], cityRequest: true, citySuccess: false, cityFailure: true };
    const reducerResponse = cityReducer(CityState, mockAction);

    expect(reducerResponse).toEqual(mockExpectResponse);
  });
});
