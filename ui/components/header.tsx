import * as React from 'react';
import Logo from "./logo";
import { Grid, Row, Col, MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';

export class Header extends React.Component<{}, { isLeftNavOpen: boolean }> {
  render() {
    return <header>
      <Grid fluid={true}>
        <Row style={{ borderTop: '5px solid #497f9e' }}>
          <Navbar staticTop={true}>
            <Navbar.Header>
              <Navbar.Toggle />
              <Navbar.Brand style={{ height: 'auto' }}>
                <Logo />
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight={true}>
                <NavItem href='who-we-are'>Who We Are</NavItem>
                <NavDropdown title='Ministries' id='basic-nav-dropdown'>
                  <MenuItem>Kids Ministry</MenuItem>
                </NavDropdown>
                <NavDropdown title='Sermons' id='basic-nav-dropdown'>
                  <MenuItem>Sermons</MenuItem>
                  <MenuItem>Scripture of the Day</MenuItem>
                </NavDropdown>
                <NavItem href='ice-cream-evangelism'>Ice Cream Evangelism</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Grid>
    </header>;
  }
}
