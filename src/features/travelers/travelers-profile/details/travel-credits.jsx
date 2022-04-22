import React, { useState } from "react";
import CollapsiblePanel from "../../../../common/components/collapsible-panel/collapsible-panel";
import IconClose from "../../../../assets/images/icon-close.png";
import Search from "../../../../common/components/search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const TravelCredits = ({ isOpen, setIsOpen }) => {
  const [details, setDetails] = useState(false);
  return (
    <CollapsiblePanel isOpen={isOpen} className="panel-travel-credits">
      {!details ? (
        <>
          <div className="section-header">
            <h3>Travel credits</h3>
            <span onClick={() => setIsOpen(false)}>
              <img src={IconClose} alt="Icon Close" />
            </span>
          </div>
          <div className="container-search">
            <Search placeholder="Search" searchIcon />
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
                  <td>
                    <span onClick={() => setDetails(true)}>Delta Airline</span>
                  </td>
                  <td>
                    <span className="amount">$ 205</span>
                  </td>
                  <td>Jan 6, 2022</td>
                </tr>
                <tr>
                  <td>
                    <span>Alaska</span>
                  </td>
                  <td>
                    <span className="amount">$ 205</span>
                  </td>
                  <td>Jan 6, 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="section-header section-header-details">
            <span onClick={() => setDetails(false)}>
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </span>
            <h3>Delta Airline</h3>
          </div>
          <div className="section-details">
            <div className="wrapper-detail">
              <span className="card-title">Credit available</span>
              <div className="card-value">
                <span className="amount">$150</span>
              </div>
            </div>
            <div className="wrapper-detail wrapper-detail-code">
              <span className="card-title">Code</span>
              <div className="card-value">
                <span>code1234567</span>
                <button className="button btn-small">Copy</button>
              </div>
            </div>
            <div className="wrapper-detail wrapper-detail-expiry">
              <span className="card-title">Expiry Day</span>
              <span className="card-value card-value-expiry">Jan 6, 2022</span>
            </div>
          </div>
          <div className="wrapper-terms">
            <a href="^_^" target="_blank" className="button-link button-terms">
              Terms & conditions{" "}
            </a>
          </div>
        </>
      )}
    </CollapsiblePanel>
  );
};

export default TravelCredits;
