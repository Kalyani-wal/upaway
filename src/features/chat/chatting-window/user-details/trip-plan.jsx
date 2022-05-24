import React from "react";
import cx from "classnames";

const TripPlan = ({ airlineIcon }) => {
  return (
    <div className="trip-details">
      <div className="trip-details-inner">
        <div className="airline-info">
          <div className={cx("img-holder", {"img-holder-without-icon" : !airlineIcon})}>
            {airlineIcon && <img src={airlineIcon} alt="Airlines" />}
          </div>
          <strong>Delta Airline</strong>
        </div>
        <strong className="from-to">
          San Francisco (SFO) - Honolulu (HNL)
        </strong>
        <span className="confirmation">Confirmation: #JMGD547D</span>
      </div>
    </div>
  );
};

export default TripPlan;
