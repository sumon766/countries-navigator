import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchCountry } from '../redux/country/countrySlice';

const Details = () => {
  const { isLoading, countryDetails } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { countryCode } = useParams();

  useEffect(() => {
    if (countryCode) {
      dispatch(searchCountry(countryCode.toLowerCase()));
    }
  }, [dispatch, countryCode]);

  return (
    <div className="details-wrapper">
      {isLoading && <div>Loading...</div>}
      {!isLoading && countryDetails && (
        <>
          <div className="country-name">
            <h2>{countryDetails.name}</h2>
          </div>
          <div className="country-flag">
            {countryDetails.flags && (
              <img src={countryDetails.flags.svg} alt={countryDetails.name} />
            )}
          </div>
          <div className="details">
            <table>
              <tbody>
                <tr>
                  <th>Official Name</th>
                  <td>{countryDetails.name}</td>
                </tr>
                <tr>
                  <th>Population</th>
                  <td>{countryDetails.population}</td>
                </tr>
                <tr>
                  <th>Continent</th>
                  <td>{countryDetails.region}</td>
                </tr>
                <tr>
                  <th>Time Zone</th>
                  <td>{countryDetails.timezones && countryDetails.timezones[0]}</td>
                </tr>
                <tr>
                  <th>Capital</th>
                  <td>{countryDetails.capital}</td>
                </tr>
                <tr>
                  <th>Currency</th>
                  <td>
                    {countryDetails.currencies && countryDetails.currencies[0] && (
                      <>
                        {countryDetails.currencies[0].name}
                        {' '}
                        (
                        {countryDetails.currencies[0].symbol}
                        )
                      </>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Language</th>
                  <td>
                    {countryDetails.languages && countryDetails.languages[0] && (
                      <>
                        {countryDetails.languages[0].name}
                        {' '}
                        (
                        {countryDetails.languages[0].nativeName}
                        )
                      </>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Latitude & Longitude</th>
                  <td>{countryDetails.latlng && countryDetails.latlng.join(', ')}</td>
                </tr>
                <tr>
                  <th>Area</th>
                  <td>
                    {countryDetails.area}
                    {' '}
                    km²
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
