import * as React from 'react';
import logo from "./logo";

import { Grid, Row, Col, MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
// import * as injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

const {a, div, img} = React.DOM;

//TODO: long list of functions
function grid(props: any, ...children: Array<any>) {
  return React.createElement(Grid, props, ...children);
}

function row(props: any, ...children: Array<any>) {
  return React.createElement(Row, props, ...children);
}

function col(props: any, ...children: Array<any>) {
  return React.createElement(Col, props, ...children);
}

function menuitem(props: any, ...children: Array<any>) {
  return React.createElement(MenuItem, props, ...children);
}

function nav(props: any, ...children: Array<any>) {
  return React.createElement(Nav, props, ...children);
}

function navbar(props: any, ...children: Array<any>) {
  return React.createElement(Navbar, props, ...children);
}

function navbarbrand(props: any, ...children: Array<any>) {
  return React.createElement(Navbar.Brand, props, ...children);
}

function navbarcollapse(props: any, ...children: Array<any>) {
  return React.createElement(Navbar.Collapse, props, ...children);
}

function navbarheader(props: any, ...children: Array<any>) {
  return React.createElement(Navbar.Header, props, ...children);
}

function navbartoggle(props: any, ...children: Array<any>) {
  return React.createElement(Navbar.Toggle, props, ...children);
}

function navitem(props: any, ...children: Array<any>) {
  return React.createElement(NavItem, props, ...children);
}

function navdropdown(props: any, ...children: Array<any>) {
  return React.createElement(NavDropdown, props, ...children);
}

export class Header extends React.Component<{}, { isLeftNavOpen: boolean }> {
  render() {
    return React.DOM.header({},

      grid({ fluid: true },

        row({ style: { borderTop: '5px solid #497f9e' } },
          navbar({ staticTop: true },
            navbarheader({},
              navbartoggle({}),
              navbarbrand({ style: { height: 'auto' } },
                logo()
              )
            ),
            navbarcollapse({},
              nav({ pullRight: true },
                navitem({ href: 'who-we-are' },
                  'Who We Are'
                ),
                navdropdown({ title: 'Ministries', id: 'basic-nav-dropdown' },
                  menuitem({},
                    'Kids Ministry'
                  )
                ),
                navdropdown({ title: 'Sermons', id: 'basic-nav-dropdown' },
                  menuitem({},
                    'Sermons'
                  ),
                  menuitem({},
                    'Scripture of the Day'
                  )
                ),
                navitem({ href: 'ice-cream-evangelism' },
                  'Ice Cream Evangelism'
                )
              )
            )
          )
        )
      )
    );
  }
}

export default function header() {
  return React.createElement(Header);
};
