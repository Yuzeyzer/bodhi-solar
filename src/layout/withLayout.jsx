import React from 'react';
import { Container, Header, Content, Navbar, Nav, Dropdown } from 'rsuite';

import './style.scss';


// This is HoC that oftenly used in production
const WithLayout = (Component) => {
  return (props) => {
    return (
      <div className='show-fake-browser navbar-page'>
        <Container>
          <Header>
            <Navbar appearance='inverse'>
              <Navbar.Brand>
                <img
                  src='https://uploads-ssl.webflow.com/603fd1ddd177621b7bbfcac9/6040875bd39fa758250a2f73_logo_blue.png'
                  alt='Bodhi'
                  height='30'
                />
              </Navbar.Brand>
              <Navbar.Body>
                <Nav>
                  <Nav.Item>Home</Nav.Item>
                  <Nav.Item>News</Nav.Item>
                  <Nav.Item>Products</Nav.Item>
                  <Dropdown title='About'>
                    <Dropdown.Item>Company</Dropdown.Item>
                    <Dropdown.Item>Team</Dropdown.Item>
                    <Dropdown.Item>Contact</Dropdown.Item>
                  </Dropdown>
                </Nav>
                <Nav pullRight>
                  <Nav.Item>Settings</Nav.Item>
                </Nav>
              </Navbar.Body>
            </Navbar>
          </Header>
          <Content className='content-container'>
            <Component {...props} />
          </Content>
        </Container>
      </div>
    );
  };
};

export default WithLayout;
