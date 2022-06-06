import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "./user-profile";
import CustomerInformation from "./customer-information";
import TravelHistory from "./travel-history";
import UpcomingTripPlans from "./upcoming-tip-plans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const PanelUserDetails = () => {
  return (
    <div className="panel-user-details">
      <Link className="arrow-back" to="/chatdesk">
        <FontAwesomeIcon icon={faArrowLeftLong} />
      </Link>
      <UserProfile />
      <div className="scroll-area">
        <CustomerInformation />
        <TravelHistory />
        <UpcomingTripPlans />
      </div>
    </div>
  );
};

export default PanelUserDetails;
