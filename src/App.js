import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Modal from "./components/Modal";
import About from "./components/About";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            {/* <Navbar/> */}
            <Modal />
          </Col>
        </Row>
        <Row>
          <Col>
            <About />
          </Col>
        </Row>
        <Row>
          <Col>
            <Skills />
          </Col>
        </Row>
        <Row>
          <Col>
            <Gallery />
          </Col>
        </Row>
        <Row>
          <Col>
            <Contact />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
