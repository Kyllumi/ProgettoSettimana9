import React from 'react'
import logo from '../logo.png';
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function MyNavbar() {
    return (
        <Navbar expand="lg" bg="transparent" data-bs-theme="dark" className='MiaNav'>
            <Navbar.Brand href="#home" as={Link} to ='/'>
                <img
                    src={logo}
                    width="100"
                    height="55"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#TV" className='active' as={Link} to ='/'>TV Shows</Nav.Link>
                    <Nav.Link href="#Movies">Movies</Nav.Link>
                    <Nav.Link href="#RecentlyAdded">Recently Added</Nav.Link>
                    <Nav.Link href="#MyList">My List</Nav.Link>
                </Nav>
                <Nav>
                    <Navbar.Text className='me-3 text-white'>{<FaSearch />}</Navbar.Text>
                    <Navbar.Text className='me-3 text-white'>KIDS</Navbar.Text>
                    <Navbar.Text className='me-3 text-white'>{<FaBell />}</Navbar.Text>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className='border-0 bg-transparent rounded-0'>
                            {<FaUser />}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='bg-dark dropdown-menu-end'>
                            <Dropdown.Item href="#/action-1" as={Link} to ='/profile' className='bg-dark text-light'>Profilo</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" as={Link} to ='/settings' className='bg-dark text-light'>Impostazioni</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
