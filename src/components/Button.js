import React from 'react';

const Button = ({ children, style, onClick, type }) => (
  <button type={type} onClick={onClick} style={style}>{children}</button>
);

export default Button;
