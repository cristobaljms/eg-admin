import React from "react";
import Modal from "react-modal";

Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.4)";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "40px"
  },
};

export const ModalWrapper = ({ children, modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};
