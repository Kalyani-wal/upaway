import React from "react";
import Calendar from "../../common/components/calendar/calendar";
import Pagination from "../../common/components/pagination/pagination";
import IconPolygon from "../../assets/images/icon-polygon.png";

const Activities = () => {
  return (
    <div className="container-activities">
      <div className="section-title-filters">
        <h3>Last Activities</h3>
        <div className="wrapper-filters wrapper-filters-dashboard">
          <Calendar />
        </div>
      </div>
      <div className="container-table">
        <table className="table table-dashboard">
          <thead>
            <tr>
              <th>
                Last interaction
                <img src={IconPolygon} alt="Polygon" />
              </th>
              <th>
                Traveler <img src={IconPolygon} alt="Polygon" />
              </th>
              <th>
                Agent <img src={IconPolygon} alt="Polygon" />
              </th>
              <th>
                Type of user <img src={IconPolygon} alt="Polygon" />
              </th>
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
              <td>
                <div className="name-info">
                  <span></span>
                  Lauren
                </div>
              </td>
              <td>
                <div className="user-type monthly">Monthly subscription</div>
              </td>
            </tr>
            <tr>
              <td>22 Jan 2022</td>
              <td>
                <div className="name-info">
                  <span>AC</span>
                  Anna Byer
                </div>
              </td>
              <td>
                <div className="name-info">
                  <span></span>
                  Lauren
                </div>
              </td>
              <td>
                <div className="user-type monthly">Monthly subscription</div>
              </td>
            </tr>
            <tr>
              <td>22 Jan 2022</td>
              <td>
                <div className="name-info">
                  <span>AC</span>
                  Anna Byer
                </div>
              </td>
              <td>
                <div className="name-info">
                  <span></span>
                  Lauren
                </div>
              </td>
              <td>
                <div className="user-type monthly">Monthly subscription</div>
              </td>
            </tr>
            <tr>
              <td>22 Jan 2022</td>
              <td>
                <div className="name-info">
                  <span>AC</span>
                  Anna Byer
                </div>
              </td>
              <td>
                <div className="name-info">
                  <span></span>
                  Lauren
                </div>
              </td>
              <td>
                <div className="user-type monthly">Monthly subscription</div>
              </td>
            </tr>
            <tr>
              <td>22 Jan 2022</td>
              <td>
                <div className="name-info">
                  <span>AC</span>
                  Anna Byer
                </div>
              </td>
              <td>
                <div className="name-info">
                  <span></span>
                  Lauren
                </div>
              </td>
              <td>
                <div className="user-type free">Free</div>
              </td>
            </tr>
            <tr>
              <td>22 Jan 2022</td>
              <td>
                <div className="name-info">
                  <span>AC</span>
                  Anna Byer
                </div>
              </td>
              <td>
                <div className="name-info">
                  <span></span>
                  Lauren
                </div>
              </td>
              <td>
                <div className="user-type full-trip">
                  Full trip subscription
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default Activities;
