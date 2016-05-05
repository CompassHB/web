import * as React from 'react';
import {Nav} from '../../components/nav';

export function AboutNav() {
  return (
    <Nav links={[
      {href: 'about', label: 'Who We Are'},
      {href: 'distinctives', label: '8 Distinctives'},
      {href: 'beliefs', label: 'What We Believe'},
    ]} />
  );
}