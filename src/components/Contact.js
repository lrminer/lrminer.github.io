import { Col, Row } from "react-bootstrap";

const Contact = () => {
  const styles = {
    wrapper: {
      background: "#222",
      color: "white",
      height: "100vh",
    },
  };
  return (
    <div
      id="contact"
      style={styles.wrapper}
    //   className="d-flex flex-column justify-content-around"
    >
      <div className="pt-5 text-center display-1" id="phone">
        <a href="tel:+16166487908">6166487908</a>
      </div>
      <div className="pt-5 text-center display-1" id="email">
        <a href="mailto:logan.miner@protonmail.com?subject=Portfolio">
          logan.miner@protonmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
