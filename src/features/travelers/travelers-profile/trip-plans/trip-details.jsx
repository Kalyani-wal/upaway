import React from "react";
import TripConfirmation from "./trip-confirmation";
import TripGap from "./trip-gap";

const TripDetails = ({ duration, destination, confirmationsNumber, src }) => {
  return (
    <div className="container-trip">
      <div className="section-header">
        <img src={src} alt="Trip Location" />
        <div className="section-trip-duration">
          <strong>{duration}</strong>
          <strong>{destination}</strong>
          <span>{confirmationsNumber} confirmations</span>
        </div>
      </div>
      <div className="section-confirmations">
        <TripConfirmation
          dateInfo="Jul 02 7:35 AM"
          airlines="Delta Airline"
          fromTo="SFO - HNL"
          confirmationId="#3425c55"
          skymilesId="#DT#hhL5321"
        />
        <TripGap missingInfo="Transportation missing" />
        <TripConfirmation
          dateInfo="Jul 02 7:35 AM"
          airlines="Delta Airline"
          fromTo="SFO - HNL"
          confirmationId="#3425c55"
          skymilesId="#DT#hhL5321"
        />
      </div>
    </div>
  );
};

export default TripDetails;
