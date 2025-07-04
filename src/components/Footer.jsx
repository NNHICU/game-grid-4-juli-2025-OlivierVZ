import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
function Footer() {
    return (
        <Navbar expand="lg" className="bg-light w-100">
            <Container>
                <Navbar.Brand href="#home"><img
                    alt=""
                    src="/media/logo.png"
                    width="150"
                    height="50"
                    className="d-inline-block align-top"
                /></Navbar.Brand>



                    <Nav className="d-flex w-100">
                        <Link className="mx-2 text-decoration-none text-dark" to='/'>

                            Home</Link>
                        <Link className="mx-2 text-decoration-none text-dark" to='/minecraft'>

                            Minecraft</Link>
                        <Link className="mx-2 text-decoration-none text-dark" to='/domain'>

                            Domain</Link>
                    </Nav>
                <div className={'justify-content-end d-flex'}>

                </div>
            </Container>
        </Navbar>
    );
}

export default Footer;