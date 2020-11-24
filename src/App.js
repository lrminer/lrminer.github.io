import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Modal from "./components/Modal";
import About from "./components/About";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
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
            <Col>{/* <Gallery /> */}</Col>
          </Row>
          <Row>
            <Col>
              <Contact />
            </Col>
          </Row>
        </Container>
      </RecoilRoot>
    </div>
  );
}

export default App;
