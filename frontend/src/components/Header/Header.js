import {Navbar, Nav, NavDropdown, Container, Form} from 'react-bootstrap';
import './Header.css'

function Header() {
  return (
    <Navbar bg='primary' expand="lg" className="bg-body-tertiary py-3" variant='dark'>
      <Container>
        <Navbar.Brand href="/" style={{fontSize: '1.5rem'}}>Note Cloud</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'>
            <Form inline>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
            </Form>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/MyNotes" className='mx-2' style={{fontSize: '1.1rem'}}>My notes</Nav.Link>
            <NavDropdown title="Himanshu" id="basic-nav-dropdown" style={{fontSize: '1.1rem'}}>
              <NavDropdown.Item href="#action/3.3" style={{fontSize: '1rem'}}>My profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={{fontSize: '1rem'}}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;