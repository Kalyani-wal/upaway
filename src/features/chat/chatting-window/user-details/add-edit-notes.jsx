import React, { useState } from "react";
import { Formik, Form } from "formik";
import CollapsiblePanel from "../../../../common/components/collapsible-panel/collapsible-panel";
import IconClose from "../../../../assets/images/icon-close.png";
import Input from "../../../../common/components/input/Input";
import AddDeleteEditConfirmatiion from "./add-edit-delete-confirmation";

const AddEditNotes = ({ isOpen, setIsOpen, edit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <CollapsiblePanel
        isOpen={isOpen}
        className="panel-travel-credits panel-add-team-member panel-add-edit-notes"
      >
        <div className="section-header">
          <h3>{edit ? "Edit" : "Add"} Notes</h3>
          <span onClick={() => setIsOpen(false)}>
            <img src={IconClose} alt="Icon Close" />
          </span>
        </div>
        <Formik>
          <Form className="form-team-member">
            <div className="container-fileds">
              <div className="container-fields-inner">
                <Input label="Filed Name" type="text" />
                <Input label="Description" type="text" />
                {edit && (
                  <button className="button-link button-delete">
                    Delete Note
                  </button>
                )}
              </div>
            </div>
            <div className="butons-wrapper">
              <button className="button btn-small btn-smaller btn-transparent">
                Cancel
              </button>
              <button
                className="button btn-small btn-smaller btn-save"
                onClick={() => toggleModal()}
              >
                Save
              </button>
            </div>
          </Form>
        </Formik>
      </CollapsiblePanel>
      <AddDeleteEditConfirmatiion isOpen={isModalOpen} toggle={toggleModal} />
    </>
  );
};

export default AddEditNotes;
