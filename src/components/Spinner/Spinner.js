import React from 'react';
import FontAwesome  from 'react-fontawesome';

export const Spinner = isLoading => (
  <FontAwesome
    style={{
      color: '#0068E6',
      position: 'absolute',
      top: '20px',
      left: '20px',
      display: isLoading ? 'block': 'none',
      cursor: 'pointer'
    }}
    name='circle-o-notch'
    spin
  />
);
