import { countrySlice } from '../redux/country/countrySlice';

describe('countrySlice reducer', () => {
  it('should return the initial state', () => {
    expect(countrySlice.reducer(undefined, {})).toEqual({
      countries: [],
      countryDetails: [],
      region: '',
      isLoading: false,
      error: false,
      success: false,
    });
  });
});