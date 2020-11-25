import { useState } from "react";
import { useRecoilState } from "recoil";
import { nameState } from "../atoms";
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
  console.log(nameState);
  const [name, setName] = useRecoilState(nameState);
  const [show, setShow] = useState(name ? false : true);
  //   console.log(name)
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const onChange = ({ target: { value } }) => {
    setName(value);
  };

  const onSubmit = () => {
    console.log(name);
    if (name === "") {
      localStorage.setItem("name", "Visitor");
      setName('Visitor');
    } else {
      localStorage.setItem("name", name);
    }
    handleClose();
  };

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
          <Form style={styles.form} onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>Hello! What is your name?</Form.Label>
              <Form.Control
                value={name}
                onChange={onChange}
                type="text"
                placeholder="Visitor"
              />
              <Button className="mt-3" type="submit">
                Enter
              </Button>
            </Form.Group>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default MyModal;
