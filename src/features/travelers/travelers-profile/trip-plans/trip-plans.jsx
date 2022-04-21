import React from "react";
import Search from "../../../../common/components/search/Search";
import Location from "../../../../assets/images/location.png";
import TripDetails from "./trip-details";
import Calendar from "../../../../common/components/calendar/calendar";
import Filters from "../../../../common/components/filters/filters";

const TripPlans = () => {
  return (
    <div className="container-trip-plans container-activities">
      <div className="title-search-bar-container section-title-filters">
        <h3 className="title">Trips</h3>
        <div className="wrapper-filters">
          <Search placeholder="Search Destination" />
          <Calendar />
          <Filters />
        </div>
      </div>
      <div className="container-trip-details">
        <TripDetails
          duration="03/03/22 - 03/06/22"
          src={Location}
          destination="Honolulu"
          confirmationsNumber="2"
        />
        <TripDetails
          duration="03/03/22 - 03/06/22"
          src={Location}
          destination="Honolulu"
          confirmationsNumber="2"
        />
      </div>
    </div>
  );
};

export default TripPlans;
