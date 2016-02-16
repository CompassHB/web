declare module "react-bootstrap" {
  import * as React from "react";

  class Brand extends React.Component<any, any> { }
  class Header extends React.Component<any, any> { }

  export class Navbar extends React.Component<any, any> {
    static Brand: typeof Brand;
    static Header: typeof Header;
  }

  export class Nav extends React.Component<any, any> { }
  export class NavItem extends React.Component<any, any> { }
  export class NavDropdown extends React.Component<any, any> { }
}
