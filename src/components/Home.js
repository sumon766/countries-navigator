import React, { useEffect, useState } from 'react';
import Country from './Country';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, searchRegion } from '../redux/country/countrySlice';

const Home = () => {
  const dispatch = useDispatch();
  const countriesState = useSelector(state => state.country);
  const countries = countriesState?.countries || [];
  const isLoading = countriesState?.isLoading || false;
  const error = countriesState?.error || false;
  const [region, setRegion] = useState("");

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const changeRegion = (event) => {
    const selectedRegion = event.target.value;
    setRegion(selectedRegion);
    if (selectedRegion === "") {
      dispatch(fetchCountries());
    } else {
      dispatch(searchRegion(selectedRegion));
    }
  }

  return (
    <div className="page-wrapper">
      <div className="filter">
        <select name="select-continent" id="continent" value={region} onChange={changeRegion}>
          <option value="">View by Region</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Africa">Africa</option>
          <option value="Polar">Polar</option>
        </select>
      </div>
      <div className="countries">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error loading data</div>
        ) : (
          countries && (countries.length > 248 ? countries.slice(0, 248) : countries).map(country => (
            <Country
              key={country.alpha3Code}
              name={country.name}
              population={country.population}
              countryCode={country.alpha3Code}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
