import React from "react";
import Card from "../../../travelers/travelers-profile/card/card";

const TravelHistory = () => {
  return (
    <div className="container-details section-travel-history">
      <h3 className="title">Travel History</h3>
      <div className="personal-details">
        <Card name="Upaway Trips Taken" value="6" />
        <Card name="Top Destination" value="Barbados" />
        <Card name="Top Activity" value="Hiking" />
      </div>
    </div>
  );
};

export default TravelHistory;
