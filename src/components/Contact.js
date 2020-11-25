import { Col, Row } from "react-bootstrap";

const Contact = () => {
  const styles = {
    wrapper: {
      background: "#222",
      color: "white",
      height: "30vh",
    },
  };
  return (
    <div
      id="contact"
      style={styles.wrapper}
      //   className="d-flex flex-column justify-content-around"
    >
      <div className="pt-5 text-center font-size" id="phone">
        <h1 className="d-sm-block d-none">
          {" "}
          <a href="tel:+16166487908">6166487908</a>
        </h1>

        <h6 className="d-block d-sm-none">
          <a href="tel:+16166487908">6166487908</a>
        </h6>
      </div>
      <div className="text-center" id="email">
        <h1 className="d-sm-block d-none">
          <a href="mailto:logan.miner@protonmail.com?subject=lrminer.github.io">
            logan.miner@protonmail.com
          </a>
        </h1>

        <h6 className="d-block d-sm-none">
          <a href="mailto:logan.miner@protonmail.com?subject=lrminer.github.io">
            logan.miner@protonmail.com
          </a>
        </h6>
      </div>
    </div>
  );
};

export default Contact;
