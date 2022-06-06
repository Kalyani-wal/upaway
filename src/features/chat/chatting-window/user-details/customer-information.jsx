import React, { useState } from "react";
import Card from "../../../travelers/travelers-profile/card/card";
import AddEditNotes from "./add-edit-notes";
import IconEdit from "../../../../assets/images/icon-edit-notes.png";

const CustomerInformation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleEditNotes = () => {
    setIsOpen(!isOpen);
    setEdit(true);
  };

  const handleAddNotes = () => {
    setIsOpen(!isOpen);
    setEdit(false);
  };
  return (
    <div className="container-details section-customer-information">
      <h3 className="title">Customer Information</h3>
      <div className="personal-details">
        <Card name="Age" value="35-40" />
        <Card name="Pronouns" value="He/Him" />
        <Card name="Passport" value="Unites States" />
        <Card name="Travel with Children" value="Yes; Age 11, Age 9" />
        <Card name="Pets" value="No" />
        <Card name="Disabilities" value="Diabetes; Pre-Board" />
        <Card name="Dietary Restrictions" value="Gluten-Free, Low-Carb" />
        <Card name="Preferred Seating" value="Aisle Seat, Front of Vessel" />
        <Card name=" TSA Pre-Check" value="Yes" />
        <div className="card-detail card-detail-edit">
          <span className="card-name">Preferred activity</span>
          <div className="card-value">
            Snorkeling{" "}
            <button className="button-link" onClick={handleEditNotes}>
              <img src={IconEdit} alt="Icon Edit" />
            </button>
          </div>
        </div>
      </div>
      <button
        className="button btn-small btn-add-notes"
        onClick={handleAddNotes}
      >
        Add Notes
      </button>
      <AddEditNotes isOpen={isOpen} setIsOpen={setIsOpen} edit={edit} />
    </div>
  );
};

export default CustomerInformation;
