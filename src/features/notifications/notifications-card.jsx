import React from "react";
import cx from "classnames";

const NotificationsCard = ({message, time, type}) => {
  return (
    <div className="notifications-card">
        <div className={cx("type", {"type-file" : type === "file"})}></div>
        <div className="container-message">
          <div className="message">{message}</div>
          <span className="time">{time} ago</span>
        </div>
    </div>
  );
};

export default NotificationsCard;
