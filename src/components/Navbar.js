import React from 'react';
import { async } from '@firebase/util';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Protected from './protected';
import About from './About';
import Home from './Home';
import Login from './Login';
import Account from '../Account';
import Pagenotfound from './Pagenotfound';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';
const NavScrollExample = () => {

    const {user, logOut} = UserAuth()

    // handles user sign out 
    const handleSignOut= async() =>{
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <BrowserRouter>
        <Navbar bg="light" expand="lg" className='nav-wrapper'>
        <Container fluid>
           <div className='logo'> <Nav.Link as={Link} to={"/"}>Random</Nav.Link></div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
            </Nav>
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                 <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/counter"}>Counter</Nav.Link>
                {user?.displayName ? <Nav.Link as={Link} to={"/account"}>Account</Nav.Link> : ""}

                {user?.displayName ? <button onClick={handleSignOut}>logout</button> : <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>}
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <div>
        <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="*" element={<Pagenotfound />}/>
            <Route path="/counter" element={ <ErrorBoundary> <Counter /> </ErrorBoundary>}/>
            <Route path="/account" element={ <Protected><Account /></Protected> }/>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default NavScrollExample;