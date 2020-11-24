import { useState } from "react";

import { Modal, Button, Form } from "react-bootstrap";

const styles = {
  wrapper: {
    background: "#222",
    // color: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  form: {
    background: "#222",
    color: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
};

const MyModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        For Development Purposes Only{" "}
      </Button> */}

      {show && (
        <Modal
          show={show}
          onHide={handleClose}
          style={styles.wrapper}
          className=""
        >
          {/* <form action="" style={styles.wrapper}>
        <label htmlFor="">Hello World</label>
      </form> */}
          <Form style={styles.form} onSubmit={handleClose}>
            <Form.Group>
              <Form.Label>What is your name?</Form.Label>
              <Form.Control type="text" placeholder="Visitor" />
            </Form.Group>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default MyModal;
