import { CSSProperties } from 'react';

export const container: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  listStyleType: 'none',
  margin: '-.5em',
  padding: 0,
};

export const item: CSSProperties = {
  flexGrow: 1,
  margin: '.5em',
  width: '20em',
};
