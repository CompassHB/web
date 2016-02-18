import * as bs from "../bootstrap";
import * as React from 'react';
import logo from "./logo";
const {nav, button, a, ul, li} = React.DOM;

export default function header() {
  return bs.navbar({}, [
    bs.navbarHeader({}, [
      bs.navbarBrand({}, [
        logo(),
      ]),
    ]),

    bs.nav({}, [
      bs.navDropdown({ title: 'Who we are' }, [
        bs.navItem({ href: '/who-we-are' }, 'Who we are'),
        bs.navItem({ href: '/what-we-believe' }, 'What we believe'),
        bs.navItem({ href: '/eight-distinctives' }, '8 distinctives'),
      ]),
      bs.navDropdown({ title: 'Ministries' }, [
        bs.navItem({ href: '/kids' }, 'Kids Ministry'),
        bs.navItem({ href: '/youth' }, 'Youth Ministry'),
        bs.navItem({ href: '/college' }, 'College Ministry'),
        bs.navItem({ href: '/sundayschool' }, 'Adult Sunday School'),
        bs.navItem({ href: '/fellowship' }, 'Home Fellowship Groups'),
        bs.navItem({ href: '/men' }, 'Mens Ministry'),
        bs.navItem({ href: '/women' }, 'Womens Ministry'),
      ]),
      bs.navDropdown({ title: 'Sermons' }, [
        bs.navItem({ href: '/sermons' }, 'Sermons'),
        bs.navItem({ href: '/read' }, 'Scripture of the Day'),
        bs.navItem({ href: '/blog' }, 'Blog'),
        bs.navItem({ href: '/songs' }, 'Songs'),
        bs.navItem({ href: '/events' }, 'Events'),
        bs.navItem({ href: '/give' }, 'Give Online'),
      ]),
      bs.navItem({ href: '/ice-cream-evangelism' }, 'Ice Cream Evangelism'),
      bs.navItem({ href: '/search' }, 'Search'),
    ]),
  ]);
};
