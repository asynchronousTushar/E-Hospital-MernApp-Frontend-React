import React, { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, NavItem, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return state;
}


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const NavbarTogglerHandler = () => {
        setIsOpen(!isOpen);
    }

    let navItems = null;
    if (props.mode === 'user' && props.isLogedIn === true) {
        navItems = (
            <React.Fragment>
                <NavItem>
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/inbox" className="nav-link">
                        Inbox
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/requests" className="nav-link">
                        Requests
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/logout" className="nav-link">
                        Log Out
                    </NavLink>
                </NavItem>
            </React.Fragment>
        )
    } else if (props.mode === 'user' && props.isLogedIn === false) {
        navItems = (
            <React.Fragment>
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
            </React.Fragment>
        )
    } else if (props.mode === 'admin', props.isLogedIn === false) {
        navItems = (
            <React.Fragment>
                <NavItem>
                    <NavLink to="/admin/login" className="nav-link">
                        Admin Log In
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/admin/signup" className="nav-link">
                        Admin Sign Up
                    </NavLink>
                </NavItem>
            </React.Fragment>
        )
    } else if (props.mode === 'admin' && props.isLogedIn === true) {
        navItems = (
        <React.Fragment>
            <NavItem>
                <NavLink to="/admin/inbox" className="nav-link">
                    Inbox
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/admin/logout" className="nav-link">
                    Log Out
                </NavLink>
            </NavItem>
        </React.Fragment>
        )
    }

    return (
        <div >
            <Navbar
                color="dark"
                expand="md"
                dark
                className="px-md-5"
            >
                {props.mode === 'admin' ? <NavbarBrand href="/admin">
                    <h2 className="text-primary">E-Hospital</h2>
                </NavbarBrand> : <NavbarBrand href="/">
                    <h2 className="text-primary">E-Hospital</h2>
                </NavbarBrand>}
                <NavbarToggler onClick={NavbarTogglerHandler} />
                <Collapse navbar isOpen={isOpen}>
                    <Nav
                        className="ms-auto "
                        navbar
                    >
                        {navItems}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default connect(mapStateToProps)(Header);