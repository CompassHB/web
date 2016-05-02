import * as React from "react";
import {Nav} from '../../components/nav';

export function MinistriesNav({active}: {active: string}) {
  const links = [
    {href: 'kids', label: "Kids Ministry"},
    {href: 'youth', label: "Youth Ministry"},
    {href: 'college', label: "College Ministry"},
    {href: 'sundayschool', label: "Adult Sunday School"},
    {href: 'fellowship', label: "Fellowship Groups"},
  ];

  return <Nav links={links} />;
}
