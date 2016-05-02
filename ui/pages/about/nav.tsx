import * as React from 'react';
import {Nav} from '../../components/nav';

export function AboutNav() {
  return (
    <Nav links={[
      {href: 'about/us', label: 'Who We Are'},
      {href: 'about/distinctives', label: '8 Distinctives'},
      {href: 'about/beliefs', label: 'What We Believe'},
    ]} />
  );
}