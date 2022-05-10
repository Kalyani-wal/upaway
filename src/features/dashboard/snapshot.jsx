import React from "react";

const Snapshot = () => {
  return (
    <div className="snapshot-section">
      <h3>Here's today in a snapshot.</h3>
      <div className="duration">
        {/* add class "active" on click of span  */}
        <span>12m</span>
        <span className="active">30d</span>
        <span>7d</span>
        <span>24h</span>
      </div>
    </div>
  );
};

export default Snapshot;
