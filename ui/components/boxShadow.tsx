import * as React from 'react';

export enum Size {SMALL,MEDIUM,LARGE};

const containerStyles: React.CSSProperties = {
  display: 'inline-block',
  marginBottom: 21,
  maxWidth: '100%',
  position: 'relative',
  width: '100%',
  zIndex: 0,
};

const wrapStyles: React.CSSProperties = {
  position: 'initial',
};

const shadowStyles: React.CSSProperties = {
  borderRadius: 'inherit',
  bottom: 4,
  boxShadow: '0 15px 10px rgba(0, 0, 0, 0.6)',
  height: '30%',
  position: 'absolute',
  zIndex: -1,
};

function beforeStyles(size: Size): React.CSSProperties {
  return Object.assign({}, shadowStyles, {
    left: 5,
    right: '50%',
    transform: `skewY(-${size === Size.LARGE ? 2 : 5}deg)`,
    transformOrigin: '0 0',
  });
}

function afterStyles(size: Size): React.CSSProperties {
  return Object.assign({}, shadowStyles, {
    left: '50%',
    right: 5,
    transform: `skewY(${size === Size.LARGE ? 2 : 5}deg)`,
    transformOrigin: '100% 0',
  });
}

export function BoxShadow({children = '' as any, size = Size.MEDIUM}) {
  return <div style={containerStyles}>
    <span style={beforeStyles(size)}>&nbsp;</span>
    <span style={wrapStyles}>
      {children}
    </span>
    <span style={afterStyles(size)}>&nbsp;</span>
  </div>;
}
