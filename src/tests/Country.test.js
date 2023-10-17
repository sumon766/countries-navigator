import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Country from '../components/Country';

test('renders the Country component without errors', () => {
  const name = 'United States';
  const population = 331449281;
  const countryCode = 'US';

  render(
    <MemoryRouter>
      <Country name={name} population={population} countryCode={countryCode} />
    </MemoryRouter>,
  );

  const countryName = screen.getByText(name);
  expect(countryName).toBeInTheDocument();
});
