import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar bg="transparent" variant="ltransparent">
    <Navbar.Brand className='brand' href="/"><img style= {{width:"100px", height:"40px"}} src="https://i.ibb.co/MfQK7zc/Group-1329.png" alt=""/></Navbar.Brand>
    
    <Nav className="ml-auto">
      <Link style = {{color: '#000000'}} className = "p-5" to = "/home">Home</Link>
      <Link style = {{color: '#000000'}} className = "p-5" href="#">News</Link>
      <Link style = {{color: '#000000'}} className = "p-5" href="#">Destination</Link>
      <Link className = "p-5" to = "/login"><Button className = "btn btn-primary">Register</Button></Link>
      <Link className = "p-5" ><Button className = "btn btn-warning">Admin</Button></Link>
    </Nav>
    
  </Navbar></>
    );
};

export default Header;