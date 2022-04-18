import React from "react";
import PageLayout from "../../../common/components/layout/page-layout";
import ArrowRight from "../../../assets/images/icon-right.png";
import Pagination from '../../../common/components/pagination/pagination';
import { Link } from "react-router-dom";
import Search from "../../../common/components/search/Search";

const TravelersActivities = () => {
  return (
    <PageLayout
      className="wrapper-page-layout-notifications wrapper-page-layout-travelers"
      headerText="Travelers"
    >
      <div className="container-activities">
        <div className="section-title-filters">
          <h3>Last Activities</h3>
          <div className="filters">
              <Search placeholder="Search Name, Location" searchText="asdhagd" />
            </div>
        </div>
        <div className="container-table">
          <table className="table table-travelers">
            <thead>
              <tr>
                <th>Last interaction</th>
                <th>Traveler</th>
                <th>Home Location</th>
                <th>Agent</th>
                <th>Upcoming trips</th>
                <th>Subscrition</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>22 Jan 2022</td>
                <td>
                  <div className="name-info">
                    <span>AC</span>
                    Anna Byer
                  </div>
                </td>
                <td>San Francisco</td>
                <td>
                  <div className="name-info">
                    <span></span>
                    Lauren
                  </div>
                </td>
                <td>3</td>
                <td>
                  <div className="user-type monthly">Monthly subscription</div>
                </td>
                <td>
                  <Link to="/travelers/1/profile">
                    <img src={ArrowRight} alt="Arrow Right" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    </PageLayout>
  );
};

export default TravelersActivities;
