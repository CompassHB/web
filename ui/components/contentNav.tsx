import * as React from "react";
import {Nav} from './nav';

export function ContentNav({active}: {active: string}) {
  const links = [
    {href: 'read', label: 'Scripture of the Day'},
    {href: 'sermons', label: 'Sermons'},
    {href: 'songs', label: 'Worship'},
    {href: 'blog', label: 'Videos'},
    {href: 'giving', label: 'Give'},
  ];

  return <Nav links={links}/>;
}
