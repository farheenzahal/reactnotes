import React from 'react'
import About from '../pages/About'
import Service from '../pages/Service'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import { Route,Routes,Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Mainrouter = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
  
          <Nav className="me-auto">
            <Nav.Link ><Link style={{textDecoration:"none",color:"white"}} to="/">Home</Link></Nav.Link>
            <Nav.Link><Link  style={{textDecoration:"none",color:"white"}} to="about">About</Link></Nav.Link>
            <Nav.Link><Link  style={{textDecoration:"none",color:"white"}} to="contact">Contact</Link></Nav.Link>
             <Nav.Link><Link style={{textDecoration:"none",color:"white"}}to="service">Service</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}>
          <Route path="primary" element={<Home/>}> </Route>
          <Route path="success" element={<About/>}> </Route>

        </Route>
        
        <Route path="service" element={<Service/>}></Route>
      </Routes>
    </div>
  )
}

export default Mainrouter
