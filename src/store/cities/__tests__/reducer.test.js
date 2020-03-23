import userReducer from '../reducer';
import { UserTypes } from '../types';

describe('User Reducer', () => {
  it('user request', () => {
    const mockAction = { action: UserTypes.USER_REQUEST };
    const mockExpectRespnse = { users: [], userRequest: true, userSuccess: false, userFailure: false };
    const reducerResponse = userReducer(mockAction);

    expect(reducerResponse).toEqual(mockExpectRespnse);
  });

  it('user request success', () => {
    const mockAction = { action: UserTypes.USER_SUCCESS };
    const mockExpectRespnse = { users: [], userRequest: false, userSuccess: true, userFailure: false };
    const reducerResponse = userReducer(mockAction);

    expect(reducerResponse).toEqual(mockExpectRespnse);
  });

  it('user request success', () => {
    const mockAction = { action: UserTypes.USER_SUCCESS };
    const mockExpectRespnse = { users: [], userRequest: false, userSuccess: false, userFailure: true };
    const reducerResponse = userReducer(mockAction);

    expect(reducerResponse).toEqual(mockExpectRespnse);
  });

  it('user request success', () => {
    const mockAction = { action: UserTypes.USER_SUCCESS };
    const mockExpectRespnse = { users: [], userRequest: false, userSuccess: false, userFailure: false };
    const reducerResponse = userReducer(mockAction);

    expect(reducerResponse).toEqual(mockExpectRespnse);
  });
});
