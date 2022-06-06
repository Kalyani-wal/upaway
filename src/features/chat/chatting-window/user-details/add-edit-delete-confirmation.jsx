import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const AddDeleteEditConfirmation = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="modal-add-edit-notes">
      <ModalHeader toggle={toggle}>Note added!</ModalHeader>
      <ModalBody>
        <div className="butons-wrapper">
          <button className="button btn-small">Ok</button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AddDeleteEditConfirmation;
