import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/countrySlice';

const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

export default store;
