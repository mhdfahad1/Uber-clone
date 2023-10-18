import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'
function Nav3() {
    return (
        <div>
            <Navbar id='nav2' expand="lg" className="bg12">
                <Container>
                    <Navbar.Brand href="#home"><img className='ms-3' width={'80px'} src="https://www.webdesignerdepot.com/cdn-origin/uploads/2018/09/uber_logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                {/* <NavDropdown.Item href="#action/3.1">Company</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">About us</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Our offerings</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">How Uber works</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Global citizenship</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Newsroom</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">investor relations</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Careers</NavDropdown.Item> */}
                                <select className='' name="" id="dropdown">
                                    <option value="" selected disabled hidden>Company</option>
                                    <option className='dropcontent' value="">About us</option>
                                    <option className='dropcontent' value="">Our offerings</option>
                                    <option className='dropcontent' value="">How Uber works</option>
                                    <option className='dropcontent' value="">Global citizenship</option>
                                    <option className='dropcontent' value="">Newsroom</option>
                                    <option className='dropcontent' value="">investor relations</option>
                                    <option className='dropcontent' value="">Blog</option>
                                    <option className='dropcontent' value="">Careers</option>
                                </select>
                            </NavDropdown>
                            <Nav.Link href="#link">Safety</Nav.Link>
                            <Nav.Link href="#link">Help</Nav.Link>


                            <Nav.Link href="#link">🌐 EN</Nav.Link>
                            <Nav.Link href="#link"><i class="fa-solid fa-cart-shopping"></i> Products</Nav.Link>
                            <Nav.Link href="#link">Log in</Nav.Link>
                            <Nav.Link href="#link"><button className='button'>Sign up</button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nav3