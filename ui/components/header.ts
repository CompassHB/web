import * as React from 'react';
import * as bs from "../bootstrap";
import * as md from "../material";
import logo from "./logo";
import {LeftNav} from 'material-ui';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const {img, ul, li, nav, button} = React.DOM;

function leftNav(props, ...children) {
  return React.createElement(LeftNav, props, ...children);
}

const styles = {
  leftNav(isOpen: boolean) {
    return {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      transition: 'transform 200ms ease-in-out',
      transform: isOpen ? 'translateX(0)': 'translateX(-100%)',
      zIndex: 1,
      backgroundColor: 'white',
    };
  },
};

class Header extends React.Component<void,{isLeftNavOpen:boolean}> {
  constructor(props) {
    super(props);

    this.state = {isLeftNavOpen: false};
  }

  toggleNav = (e) => {
    const willBeOpen = !this.state.isLeftNavOpen;
    this.setState({isLeftNavOpen: willBeOpen});
  }

  render() {
    return React.DOM.header({},
      button({onClick: this.toggleNav},
        img({src: md.icons.svg.menu.black.src, height: 24, width: 24, alt: "Menu"})
      ),

      logo(),

      leftNav({open: this.state.isLeftNavOpen, docked: false},
        bs.nav({onClick: this.toggleNav}, [
          bs.navDropdown({ key: 'who-we-are', title: 'Who we are', id: 'header-who-we-are'}, [
            bs.navItem({ key: 'who-we-are', href: '/who-we-are' }, 'Who we are'),
            bs.navItem({ key: 'beliefs', href: '/what-we-believe' }, 'What we believe'),
            bs.navItem({ key: 'distinctives', href: '/eight-distinctives' }, '8 distinctives'),
          ]),
          bs.navDropdown({ key: 'ministries', title: 'Ministries', id: 'header-ministries' }, [
            bs.navItem({ key: 'kids', href: '/kids' }, 'Kids Ministry'),
            bs.navItem({ key: 'youth', href: '/youth' }, 'Youth Ministry'),
            bs.navItem({ key: 'college', href: '/college' }, 'College Ministry'),
            bs.navItem({ key: 'sundayschool', href: '/sundayschool' }, 'Adult Sunday School'),
            bs.navItem({ key: 'fellowship', href: '/fellowship' }, 'Home Fellowship Groups'),
            bs.navItem({ key: 'men', href: '/men' }, 'Mens Ministry'),
            bs.navItem({ key: 'women', href: '/women' }, 'Womens Ministry'),
          ]),
          bs.navDropdown({ key: 'sermons', title: 'Sermons', id: 'header-sermons' }, [
            bs.navItem({ key: 'sermons', href: '/sermons' }, 'Sermons'),
            bs.navItem({ key: 'read', href: '/read' }, 'Scripture of the Day'),
            bs.navItem({ key: 'blog', href: '/blog' }, 'Blog'),
            bs.navItem({ key: 'songs', href: '/songs' }, 'Songs'),
            bs.navItem({ key: 'events', href: '/events' }, 'Events'),
            bs.navItem({ key: 'give', href: '/give' }, 'Give Online'),
          ]),
          bs.navItem({ key: 'ice-cream-evangelism', href: '/ice-cream-evangelism' }, 'Ice Cream Evangelism'),
          bs.navItem({ key: 'search', href: '/search' }, 'Search'),
        ])
      )
    );
  }
}

export default function header() {
  return React.createElement(Header);
};
