import * as React from 'react';
import {Nav} from './nav';

export function AboutNav({active}: {active: string}) {
  const links = [
    {href: 'who-we-are', label: 'Who We Are'},
    {href: 'eight-distinctives', label: '8 Distinctives'},
    {href: 'beliefs', label: 'What We Believe'},
  ];

  return <Nav {...{active, links}} />;
}