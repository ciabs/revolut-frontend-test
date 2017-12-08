import React from 'react';
import FontAwesome  from 'react-fontawesome';

export const Error = error => (
  <FontAwesome
    style={{
      color: 'red',
      position: 'absolute',
      top: '20px',
      right: '20px',
      display: error.error ? 'block': 'none',
      cursor: 'pointer'
    }}
    name='exclamation-triangle'
    size='2x'
    title={error.error}
  />
);
