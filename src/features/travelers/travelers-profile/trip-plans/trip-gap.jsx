import React from "react";

const TripGap = ({missingInfo}) => {
  return (
    <div className="section-confirmation section-trip-gap">
      <div className="time-or-gap">Trip gap</div>
      <div className="box-missing-info">
        <span>{missingInfo}</span>
      </div>
    </div>
  );
};

export default TripGap;
