import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const DeleteTeamMember = ({ isOpen, setIsModalOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Are you sure you want Delete Drew as team member?</ModalHeader>
      <ModalBody>
        <p>Drew won’t be able to access to the platform anymore</p>
        <div className="butons-wrapper">
            <button className="button btn-small btn-transparent">
              Cancel
            </button>
            <button className="button btn-small">
              Yes
            </button>
          </div>
      </ModalBody>
    </Modal>
  );
};

export default DeleteTeamMember;
