import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";



function Navbarlayout() {
    return (
        <>
            <Navbar fluid="true" expand="lg" className="bg-primary " >
                <Container >
                    <Navbar.Brand className="text-white fs-3 fs-cursive">Disha</Navbar.Brand>
                    <Navbar.Toggle></Navbar.Toggle>
                    <Navbar.Collapse>
                    <Nav className="ms-auto ">
                        <Nav.Link ><Link to="/" className="text-white fs-5 text-decoration-none" >Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about" className="text-white fs-5 text-decoration-none"  >About</Link></Nav.Link>
                        {/* <NavDropdown title="Services" style={{ color: 'white' }} >                            
                        <NavDropdown.Item className="text-black fs-5 text-decoration-none" >Training</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item className="text-black fs-5 text-decoration-none" >Web Development</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link><Link to="/contact-us" className="text-white fs-5 text-decoration-none" >Contact Us</Link></Nav.Link>
                        <Nav.Link><Link to="/cart" className="text-white fs-5 text-decoration-none"  >Cart</Link></Nav.Link>
                        <Nav.Link><Link to="/login" className="text-white fs-5 text-decoration-none"  >Login</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}

export default Navbarlayout;