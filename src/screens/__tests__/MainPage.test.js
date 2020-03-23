import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../MainPage';

jest.mock('react-redux', () => ({
useDispatch: ()=> { },
useSelector: () => ({
  city: { consolidated_weather: { days: [] } },
  cityRequest:false,
  cityFailure: false
})
}));

describe('<MainPage />', () => {
it('Expect to not log errors in console', () => {
const spy = jest.spyOn(global.console, 'error');
const wrapper = shallow(
<MainPage />,
);
expect(wrapper).not.toBeNull();
expect(spy).not.toHaveBeenCalled();
});
it('Should render and match the snapshot', () => {
const wrapper = shallow(
<MainPage />,
);
expect(wrapper).toMatchSnapshot();
});
});