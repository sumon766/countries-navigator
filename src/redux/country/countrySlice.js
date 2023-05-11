import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiURL = 'https://restcountries.com/v2/all';
const searchURL = 'https://restcountries.com/v2';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
    try {
        const response = await fetch(apiURL);
        return response.json();
    }
    catch (error) {
        return error;
    }
});

export const searchCountry = createAsyncThunk('countries/searchCountry', async (countryCode) => {
  try {
      const response = await fetch(`${searchURL}/alpha/${countryCode}`);
      return response.json();
  }
  catch (error) {
      return error;
  }
});

export const searchRegion = createAsyncThunk('countries/searchRegion', async (regionCode) => {
    try {
        const response = await fetch(`${searchURL}/region/${regionCode}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
});

const initialState = {
    countries: [],
    countryDetails: [],
    region: '',
    isLoading: false,
    error: false, 
    success: false
}

export const countrySlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        getRegion: (state, action) => {
            state.region = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchCountries.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchCountries.fulfilled, (state, action) => {
            state.isLoading = false;
            state.countries = action.payload;
            state.success = true;
          })
          .addCase(fetchCountries.rejected, (state) => {
            state.isLoading = false;
            state.countries = [];
            state.error = true;
          })
          .addCase(searchRegion.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(searchRegion.fulfilled, (state, action) => {
            state.isLoading = false;
            state.countries = action.payload;
            state.success = true;
          })
          .addCase(searchRegion.rejected, (state) => {
            state.isLoading = false;
            state.countries = [];
            state.error = true;
          })
          .addCase(searchCountry.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(searchCountry.fulfilled, (state, action) => {
            state.isLoading = false;
            state.countryDetails = action.payload;
            state.success = true;
          })
          .addCase(searchCountry.rejected, (state) => {
            state.isLoading = false;
            state.countryDetails = {};
            state.error = true;
          });
    },
});

export const { getRegion } = countrySlice.actions;
export default countrySlice.reducer;
