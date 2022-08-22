import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logoOne.png'



function Menu() {
  return (
    
  <div id='Menu'>
      <Navbar expand="lg">
        <Container>
          <div className='resp-logo'>
          <a href="/">
            <img src={Logo} alt="logo-responsive" />
            </a>

          </div>
        <Navbar.Toggle aria-controls='responsive-na' />
        <Navbar.Collapse>
          <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/roster">Roster</NavLink>
          <NavLink to="/schedule">Schedule</NavLink>
          <NavLink to="/score">Score</NavLink>
          <NavLink to="/coaches">Coaches</NavLink>
          <NavLink to="/gamerecap">Game Recap</NavLink>
          <NavLink to="/fundriser">FundRaiser</NavLink>
          <NavLink to="/information">Information</NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
</div>
  )
}

export default Menu
