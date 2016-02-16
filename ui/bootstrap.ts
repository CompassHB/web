import * as React from "react";
import * as ReactBootstrap from "react-bootstrap";

export function nav(props, children) {
  return React.createElement(ReactBootstrap.Nav, props, children);
}

export function navDropdown(props, children) {
  return React.createElement(ReactBootstrap.NavDropdown, props, children);
}

export function navItem(props, children) {
  return React.createElement(ReactBootstrap.NavItem, props, children);
}

export function navbar(props, children) {
  return React.createElement(ReactBootstrap.Navbar, props, children);
}

export function navbarHeader(props, children) {
  return React.createElement(ReactBootstrap.Navbar.Header, props, children);
}

export function navbarBrand(props, children) {
  return React.createElement(ReactBootstrap.Navbar.Brand, props, children);
}
