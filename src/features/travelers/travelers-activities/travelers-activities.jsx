import React from "react";
import PageLayout from "../../../common/components/layout/page-layout";
import ArrowRight from "../../../assets/images/icon-right.png";
import Pagination from "../../../common/components/pagination/pagination";
import { Link } from "react-router-dom";
import Search from "../../../common/components/search/Search";
import Calendar from "../../../common/components/calendar/calendar";
import IconPolygon from "../../../assets/images/icon-polygon.png";

const TravelersActivities = () => {
  return (
    <PageLayout
      className="wrapper-page-layout-notifications wrapper-page-layout-travelers"
      headerText="Travelers"
    >
      <div className="container-activities">
        <div className="section-title-filters">
          <h3>Last Activities</h3>
          <div className="wrapper-filters">
            <Search placeholder="Search Name, Location" searchText="asdhagd" />
            <Calendar />
          </div>
        </div>
        <div className="container-table">
          <table className="table table-travelers">
            <thead>
              <tr>
                <th>Last interaction <img src={IconPolygon} alt="Polygon" /></th>
                <th>Traveler <img src={IconPolygon} alt="Polygon" /></th>
                <th>Home Location <img src={IconPolygon} alt="Polygon" /></th>
                <th>Agent <img src={IconPolygon} alt="Polygon" /></th>
                <th>Upcoming trips <img src={IconPolygon} alt="Polygon" /></th>
                <th>Subscrition <img src={IconPolygon} alt="Polygon" /></th>
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
