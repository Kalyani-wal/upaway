import React from "react";
import Calendar from "../../common/components/calendar/calendar";
import Pagination from "../../common/components/pagination/pagination";

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
              <th>Last interaction</th>
              <th>Traveler</th>
              <th>Agent</th>
              <th>Type of user</th>
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
