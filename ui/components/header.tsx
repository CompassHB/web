import * as React from 'react';
import Logo from "./logo";
import { Grid, Row, Col, MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';

export class Header extends React.Component<{}, { isLeftNavOpen: boolean }> {
  render() {
    return <Grid fluid={true} componentClass="header">
      <style>{`
        .navbar {
          min-height: auto;
          margin-bottom: auto;
        }

        .navbar-default {
          border: none;
        }

        .navbar {
          border-top: 5px solid #497f9e;
          height: 100px;
          background-color: #FFF;
        }

        .navbar-header {
          height: 79px;
        }

        .navbar-toggle {
          margin-top: 20px;
        }

        .navbar-collapse {
          background-color: #FFF;
        }

        #logo {
          height: 60px;
          padding: 5px;
          margin-left: 20px;
        }

        #navbar {
          margin-right: 30px;
        }

        @media (min-width: 992px) {
          .dropdown:hover .dropdown-menu {
            display: block;
          }

          .navbar-collapse {
            background-color: transparent;
          }
        }

        .navbar-default .navbar-nav li a {
          padding: 40px 20px;
          color: #393939;
          font-size: 1.30em;
        }

        .navbar-default .navbar-nav .dropdown-menu li a {
          padding: 10px 15px;
          font-size: 1.2em;
        }

        .navbar-default .navbar-nav .dropdown-menu li a:hover {
          color: #FFF;
          background-color: #497f9E;
        }
      `}</style>
      <Row>
        <Navbar staticTop={true} fluid={true} style={{height:100, borderTop: '5px solid #497f9e', backgroundColor: 'white'}}>
          <Navbar.Header style={{height: 79}}>
            <Navbar.Toggle />
            <Navbar.Brand style={{ height: 'auto' }} className="navbar-brand">
              <Logo />
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight={true}>
              <NavDropdown title='Who We Are' id='compasshb-header-dropdown-about'>
                <MenuItem href='/who-we-are'>
                  <i className="material-icons">person</i> Who We Are
                </MenuItem>
                <MenuItem href='/eight-distinctives'>
                  <i className="material-icons">flag</i> 8 Distinctives
                </MenuItem>
                <MenuItem href='/what-we-believe'>
                  <i className="material-icons">library_books</i> What We Believe
                </MenuItem>
                <MenuItem href='/ice-cream-evangelism'>
                  <i className="material-icons">announcement</i> Ice Cream Evangelism
                </MenuItem>
              </NavDropdown>
              <NavDropdown title='Ministries' id='compasshb-header-dropdown-ministries'>
                <MenuItem href='/kids'>
                  <i className="material-icons">child_care</i> Kids' Ministry
                </MenuItem>
                <MenuItem href='/youth'>
                  <i className="material-icons">group</i> Youth Ministry
                </MenuItem>
                <MenuItem href='/college'>
                  <i className="material-icons">domain</i> College Ministry
                </MenuItem>
                <MenuItem href='/sundayschool'>
                  <i className="material-icons">free_breakfast</i> Adult Sunday School
                </MenuItem>
                <MenuItem href='/fellowship'>
                  <i className="material-icons">home</i> Fellowship Groups
                </MenuItem>
                <MenuItem href='/men'>
                  <i className="material-icons">account_box</i> Men's Ministry
                </MenuItem>
                <MenuItem href='/womens'>
                  <i className="material-icons">account_circle</i> Women's Ministry
                </MenuItem>
              </NavDropdown>
              <NavItem href="/sermons">Sermons</NavItem>
              <NavDropdown title='Resources' id='compasshb-header-dropdown-resources'>
                <MenuItem href='/read'>
                  <i className="material-icons">library_books</i> Scripture of the Day
                </MenuItem>
                <MenuItem href='/videos'>
                  <i className="material-icons">video_library</i> Videos
                </MenuItem>
                <MenuItem href='/songs'>
                  <i className="material-icons">library_music</i> Songs
                </MenuItem>
                <MenuItem href='/events'>
                  <i className="material-icons">event</i> Events
                </MenuItem>
                <MenuItem href='/photos'>
                  <i className="material-icons">camera</i> Photos
                </MenuItem>
                <MenuItem href='/giving'>
                  <i className="material-icons">card_giftcard</i> Give Online
                </MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Grid>;
  }
}
