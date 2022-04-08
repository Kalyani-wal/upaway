import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import IconRise from "../../assets/images/icon-rise.png";
import IconFall from "../../assets/images/icon-fall.png";
import cx from "classnames";

const AnalyticsCard = ({ title, number, percentage, rise, src }) => {
  return (
    <div className="analytics-card">
      <h3 className="title">{title}</h3>
      <div>
        <div className="analytics-data">
          <span className="number">{number}</span>
          <div className={cx("percentage", { "percentage-rise": rise })}>
            {/* {rise ? (
              <FontAwesomeIcon icon={faArrowUp} />
            ) : (
              <FontAwesomeIcon icon={faArrowDown} />
            )} */}
            {rise ? (
              <img src={IconRise} alt="Arrow Up" />
            ) : (
              <img src={IconFall} alt="Arrow Down" />
            )}
            <span>{percentage}%</span> vs last month
          </div>
        </div>
        <div className="analytics-chart">
          <img src={src} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
