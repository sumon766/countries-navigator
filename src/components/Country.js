import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Country = ({ name, population, countryCode }) => (
  <div className="country">
    <h3>{name}</h3>
    <h4>{population}</h4>
    <NavLink to={`/countries/${countryCode}`}>
      See details
      <span><FontAwesomeIcon icon={faArrowRight} /></span>
    </NavLink>
  </div>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  countryCode: PropTypes.string.isRequired,
};

export default Country;
