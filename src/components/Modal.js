import ModalWrapper from "./Modal.styled";

const Modal = ({ description, show }) => {
  return (
    <>
      {show && (
        <ModalWrapper>
          {(description && description) || "Hello World"}
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
