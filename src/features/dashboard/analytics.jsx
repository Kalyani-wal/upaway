import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AnalyticsCard from "./analytics-card";
import ChartRise from '../../assets/images/chart-sample-rise.png';
import ChartFall from '../../assets/images/chart-sample-fall.png';

const Analytics = () => {
  return (
    <div className="section-analytics">
      <AnalyticsCard title="Upaway Users" number="20.8k" percentage="12" rise src={ChartRise} />
      <AnalyticsCard title="Traveler Supported" number="6.4k" percentage="2" src={ChartFall} />
      <AnalyticsCard title="Team Quality Score" number={["4.9", <FontAwesomeIcon icon={faStar} />]} percentage="2" rise src={ChartRise} />
    </div>
  );
};

export default Analytics;
