import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Country = ({
  name, population, countryCode, flag,
}) => (
  <div className="country">
    <h3>{name}</h3>
    <img src={flag} alt={name} />
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
  flag: PropTypes.string.isRequired,
};

export default Country;
