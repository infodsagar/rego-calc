import React from 'react';
import App from './App';

export const Price = (props) => {
  const { day, fee } = props;
  let temp = '';
  if (/[0-9]/.test(day) && /[0-9]/.test(fee)) {
    temp = (((fee - 68) / 365) * day - 30).toFixed(2);
  } else {
    temp = '';
  }

  return <h1>Refund: ${temp}</h1>;
};
