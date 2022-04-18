import React from "react";

const Card = ({ name, value }) => {
  return (
    <div className="card-detail">
      <span className="card-name">{name}</span>
      <div className="card-value">{value}</div>
    </div>
  );
};

export default Card;
