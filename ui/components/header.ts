import * as React from 'react';
import logo from "./logo";

import {Grid, Row, Col, MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const {a} = React.DOM;

//TODO: long list of functions
function grid(props, ...children) {
  return React.createElement(Grid, props, ...children);
}

function row(props, ...children) {
  return React.createElement(Row, props, ...children);
}

function col(props, ...children) {
  return React.createElement(Col, props, ...children);
}

function menuitem(props, ...children) {
  return React.createElement(MenuItem, props, ...children);
}

function nav(props, ...children) {
  return React.createElement(Nav, props, ...children);
}

function navbar(props, ...children) {
  return React.createElement(Navbar, props, ...children);
}

function navbarbrand(props, ...children) {
  return React.createElement(Navbar.Brand, props, ...children);
}

function navbarcollapse(props, ...children) {
  return React.createElement(Navbar.Collapse, props, ...children);
}

function navbarheader(props, ...children) {
  return React.createElement(Navbar.Header, props, ...children);
}

function navbartoggle(props, ...children) {
  return React.createElement(Navbar.Toggle, props, ...children);
}

function navitem(props, ...children) {
  return React.createElement(NavItem, props, ...children);
}

function navdropdown(props, ...children) {
  return React.createElement(NavDropdown, props, ...children);
}

class Header extends React.Component<void, void> {
  render() {
    return React.DOM.header({},

      grid({},

        row({ style: { borderTop: '5px solid #497f9e' } },
          navbar({},
            navbarheader({},
              navbarbrand({},
                'logo'
              ),
              navbartoggle({})
            ),
            navbarcollapse({},
              nav({ pullRight: true },
                navitem({},
                  'Who We Are'
                ),
                navdropdown({ title: 'Ministries' },
                  menuitem({},
                    'menuitem1'
                  )
                ),
                navdropdown({ title: 'Sermons' },
                  menuitem({},
                    'menuitem1'
                  )
                ),
                navitem({},
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

export default function footer() {
  return React.createElement(Header);
};
