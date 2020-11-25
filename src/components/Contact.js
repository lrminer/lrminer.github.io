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
      <div className="pt-5 text-center" id="phone">
        <a href="tel:+16166487908">6166487908</a>
      </div>
      <div className="pt-5 text-center" id="email">
        <a href="mailto:logan.miner@protonmail.com?subject=lrminer.github.io">
          logan.miner@protonmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
