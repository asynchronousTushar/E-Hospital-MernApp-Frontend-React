import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, NavItem, Nav} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const NavbarTogglerHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div >
            <Navbar
                color="dark"
                expand="md"
                dark
                className="px-md-5"
            >
                <NavbarBrand href="/">
                    <h2 className="text-primary">E-Hospital</h2>
                </NavbarBrand>
                <NavbarToggler onClick={NavbarTogglerHandler} />
                <Collapse navbar isOpen={isOpen}>
                    <Nav
                        className="ms-auto "
                        navbar
                    >
                        <NavItem>
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/login" className="nav-link">
                                Log In
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/signup" className="nav-link">
                                Sign Up
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/inbox" className="nav-link">
                                Inbox
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/logout" className="nav-link">
                                Log Out
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;