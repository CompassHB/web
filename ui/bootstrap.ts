import * as React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export function grid(props, ...children) {
  return React.createElement(Grid, props, ...children);
}

export function row(props, ...children) {
  return React.createElement(Row, props, ...children);
}

export function col(props, ...children) {
  return React.createElement(Col, props, ...children);
}
