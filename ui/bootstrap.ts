import {createElement} from "react";
import {Nav, NavDropdown, NavItem, Navbar} from "react-bootstrap";

export function nav(props, children) {
  return createElement(Nav, props, children);
}

export function navDropdown(props, children) {
  return createElement(NavDropdown, props, children);
}

export function navItem(props, children) {
  return createElement(NavItem, props, children);
}

export function navbar(props, children) {
  return createElement(Navbar, props, children);
}

export function navbarHeader(props, children) {
  return createElement(Navbar.Header, props, children);
}

export function navbarBrand(props, children) {
  return createElement(Navbar.Brand, props, children);
}
