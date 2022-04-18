import React from "react";
import Search from "../../../../common/components/search/Search";
import Location from "../../../../assets/images/location.png";
import TripDetails from "./trip-details";

const TripPlans = () => {
  return (
    <div className="container-trip-plans">
      <div className="title-search-bar-container">
        <h3 className="title">Trips</h3>
        <div className="section-filter-search-bar">
          <Search placeholder="Search Destination" />
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
