import { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Modal from "./components/Modal";
import About from "./components/About";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { RecoilRoot } from "recoil";
import { Link } from "react-scroll";

function App() {
  const possibleSections = ["greeting", "intro", "iama"];

  const [index, setIndex] = useState(1);

  const [targetElementState, setTargetElementState] = useState(
    possibleSections[index]
  );

  useEffect(() => {
    setTargetElementState(possibleSections[index]);
  }, [possibleSections, index]);

  const handleClick = () => {
    console.log(index);
    console.log(possibleSections.length);
    if (index === possibleSections.length - 1) {
      return setIndex(0);
    } else {
      return setIndex(index + 1);
    }
  };

  return (
    <div className="App">
      <RecoilRoot>
        <Container fluid className="p-0">
          <Link
            activeClass="active"
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              width: "100%",
              backgroundColor: "red",
              color: "white",
              textAlign: "center",
            }}
            to={targetElementState}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleClick}
          >
            <button>Next</button>
          </Link>
          <Row noGutters>
            <Col>
              {/* <Navbar/> */}
              <Modal />
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <About />
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <Skills />
            </Col>
          </Row>
          <Row noGutters>
            <Col>{/* <Gallery /> */}</Col>
          </Row>
          <Row noGutters>
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
