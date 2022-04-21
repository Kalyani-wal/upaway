import React from "react";
import CollapsiblePanel from "../../../../common/components/collapsible-panel/collapsible-panel";
import IconClose from "../../../../assets/images/icon-close.png";
import Search from "../../../../common/components/search/Search";

const TravelCredits = ({ isOpen, setIsOpen }) => {
  return (
    <CollapsiblePanel isOpen={isOpen} className="panel-travel-credits">
      <div className="section-header">
        <h3>Travel credits</h3>
        <span onClick={() => setIsOpen(false)}>
          <img src={IconClose} alt="Icon Close" />
        </span>
      </div>
      <div className="container-search">
        <Search placeholder="Search"/>
      </div>
      <div className="container-table">
        <table className="table table-travel-credits">
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Amount</th>
              <th>Expiry</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Delta Airline</td>
              <td>
                <span className="amount">$ 205</span>
              </td>
              <td>Jan 6, 2022</td>
            </tr>
            <tr>
              <td>Alaska</td>
              <td>
                <span className="amount">$ 205</span>
              </td>
              <td>Jan 6, 2022</td>
            </tr>
            <tr>
              <td>Alaska</td>
              <td>
                <span className="amount">$ 205</span>
              </td>
              <td>Jan 6, 2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </CollapsiblePanel>
  );
};

export default TravelCredits;
