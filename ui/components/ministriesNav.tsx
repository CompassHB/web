import * as React from "react";
import {Nav} from './nav';

export function MinistriesNav({active}: {active: string}) {
  const links = [
    {href: 'kids', label: "Kids Ministry"},
    {href: 'youth', label: "Youth Ministry"},
    {href: 'college', label: "College Ministry"},
    {href: 'sundayschool', label: "Adult Sunday School"},
    {href: 'fellowship', label: "Fellowship Groups"},
    {href: 'men', label: "Men's Ministry"},
    {href: 'women', label: "Women's Ministry"},
  ];


  return <Nav {...{active, links}} />;
}