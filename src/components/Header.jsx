import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import {mdiPickaxe, mdiHome, mdiDomain  } from '@mdi/js';

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-light w-100 fixed-top">
                <Container>
                    <Navbar.Brand href="#home"><img
                        alt=""
                        src="/media/logo.png"
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav t">
                        <Nav className="d-flex w-100 justify-content-end  ">
                            <Link className="mx-2 text-decoration-none text-dark" to='/'>
                                <Icon path={mdiHome} size={1} />
                                Home</Link>
                            <Link className="mx-2 text-decoration-none text-dark" to='/minecraft'>
                                <Icon path={mdiPickaxe} size={1} />
                                Minecraft</Link>
                            <Link className="mx-2 text-decoration-none text-dark" to='/domain'>
                                <Icon path={mdiDomain} size={1} />
                                Domain</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;