import React from 'react';
import PropTypes from 'prop-types';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 5,
  backgroundColor: '#FFF',
  cursor: 'pointer',
  fontSize: 12,
  padding: '3px 10px',
  margin: 10,
};

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
