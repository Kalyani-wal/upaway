import React from "react";
import Card from "../card/card";
import Search from "../../../../common/components/search/Search";
import Pagination from '../../../../common/components/pagination/pagination';
import Calendar from "../../../../common/components/calendar/calendar";
import Filters from "../../../../common/components/filters/filters";

const PaymentDetails = () => {
  return (
    <div className="container-activities container-trip-plans container-payment-details">
      <div className="container-details">
        <h3 className="title">Credit Card</h3>
        <div className="personal-details">
          <Card name="Type" value="Mastercard" />
          <Card name="Name on card" value="Andrew Carter" />
          <Card name="Number" value="5546 7787 9975" />
          <Card name="Expire" value="06/23" />
          <Card name="CVV" value="776" />
        </div>
      </div>
      <div className="section-title-filters title-search-bar-container">
        <h3 className="title">Last Transaction</h3>
        <div className="wrapper-filters">
          <Search />
          <Calendar />
          <Filters />
        </div>
      </div>
      <div className="container-table">
        <table className="table table-payment-details">
          <thead>
            <tr>
              <th>Date</th>
              <th>Supplier</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>22 Jan 2022</td>
              <td>Delta airline</td>
              <td>Flight Booking</td>
              <td>– $ 345.00</td>
            </tr>
            <tr>
              <td>22 Jan 2022</td>
              <td>Delta airline</td>
              <td>Flight Booking</td>
              <td>– $ 345.00</td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default PaymentDetails;
