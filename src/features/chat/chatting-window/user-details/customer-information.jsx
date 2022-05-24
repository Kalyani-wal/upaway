import React from "react";
import Card from "../../../travelers/travelers-profile/card/card";

const CustomerInformation = () => {
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
      </div>
      <button className="button btn-small btn-add-notes">Add Notes</button>
    </div>
  );
};

export default CustomerInformation;
