import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faAngleLeft, faGear } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const location = useLocation();

  return (
    <header>
      <div className="navbar">
        <div className="back-button">
          {location.pathname.includes('/countries/') && (
          <NavLink to="/">
            <FontAwesomeIcon icon={faAngleLeft} />
          </NavLink>
          )}
        </div>
        <div className="site-title">
          <NavLink to="/">
            <h1>Countries Navigator</h1>
          </NavLink>
        </div>
        <div className="voice-settings">
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faGear} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
