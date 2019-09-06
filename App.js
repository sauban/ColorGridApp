import React from 'react';

import Grid from './Grid';

const colors = [
  'black',
  'blue',
  'cyan',
  'green',
  'magenta',
  'red',
  'yellow'
];

export default function App() {
  return (
    <Grid colors={colors} />
  );
}
