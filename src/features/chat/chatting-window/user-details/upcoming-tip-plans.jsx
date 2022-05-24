import React from "react";
import TripPlan from './trip-plan';
import IconAirlines from "../../../../assets/images/icon-airlines.png";

const UpcomingTripPlans = () => {
  return (
    <div className="container-details section-trip-plans">
      <h3 className="title">Upcoming Trip Plans</h3>
      <div className="section-trip-details">
        <TripPlan airlineIcon={IconAirlines} />
        <TripPlan />
      </div>
    </div>
  );
};

export default UpcomingTripPlans;
