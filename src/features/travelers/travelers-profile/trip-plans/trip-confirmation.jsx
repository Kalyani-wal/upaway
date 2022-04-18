import React from "react";
import ArrowRight from "../../../../assets/images/icon-right.png";
import IconAirlines from "../../../../assets/images/icon-airlines.png";

const TripConfirmation = ({dateInfo, airlines, fromTo, confirmationId, skymilesId}) => {
  return (
    <div className="section-confirmation">
      <div className="time-or-gap">{dateInfo}</div>
      <a href="^_^" target="_blank" className="box-details">
        <div className="section-details">
          <div className="airline-info">
            <img src={IconAirlines} alt="Airlines" />
            <strong>{airlines}</strong>
          </div>
          <strong className="from-to">{fromTo}</strong>
          <span>Confirmation: {confirmationId}</span>
          <span>Skymiles: {skymilesId}</span>
        </div>
        <img src={ArrowRight} alt="Arrow Right" />
      </a>
    </div>
  );
};

export default TripConfirmation;
