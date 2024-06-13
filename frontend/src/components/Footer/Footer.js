import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer style={{
      bottom: '0',
      width: '100%',
      position: "relative",
      justifyContent: 'center', 
      display: 'flex',
    }}>
      <Container>
        <Row>
          <Col className="text-center py-3" style={{fontSize: '1.2rem'}}>Copyright &copy; Note Cloud</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;