import { Container, Row, Button} from "react-bootstrap";
import {} from "./LandingPage.css"

const LandingPage = () => {
    return (
       <div className="main">
        <Container>
           <Row>
            <div className="intro-text">
                <h1 className="title">Welcome to Note Cloud</h1>
                <p className="subtitle">One place for all your notes</p>
                <div className="buttonContainer">
                    <a href="/login">
                    <Button size="lg" className="landingButton">Login</Button>
                    </a>
                    <a href="/register">
                        <Button size="lg" className="landingButton" variant="outline-primary">Signup</Button>
                    </a>
                </div>
            </div>
           </Row>
        </Container>
       </div>
    )
}

export default LandingPage;