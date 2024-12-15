import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import './Logo.css';

const Logo = ({ altText = "App Logo", width = "100px", height = "auto" }) => {
  return (
    <img
      src={logo}
      alt={altText}
      className="Logo"
      style={{ width, height }}
    />
  );
};

Logo.propTypes = {
  altText: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Logo;