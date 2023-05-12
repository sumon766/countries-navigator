import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/store';
import Details from '../components/Details';

describe('Details component', () => {
  test('renders official name, population and timezone', () => {
    const countryDetails = {
      name: 'United States of America',
      population: 328239523,
      timezones: ['UTC−12:00', 'UTC−11:00', 'UTC−10:00', 'UTC−09:00', 'UTC−08:00', 'UTC−07:00', 'UTC−06:00', 'UTC−05:00', 'UTC−04:00', 'UTC+10:00', 'UTC+12:00'],
    };
    const { getByText } = render(
      <Provider store={store}>
        <Details />
      </Provider>,
      { initialState: { country: { countryDetails } } },
    );
    const officialName = getByText('Official Name');
    const population = getByText('Population');
    const timezone = getByText('Time Zone');

    expect(officialName).toBeInTheDocument();
    expect(population).toBeInTheDocument();
    expect(timezone).toBeInTheDocument();
  });
});
