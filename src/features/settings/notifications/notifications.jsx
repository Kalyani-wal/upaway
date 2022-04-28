import React from "react";
import Switch from "../../../common/components/switch/switch";

const Notifications = () => {
  return (
    <div className="container-notifications">
      <div className="division-settings header-tab-content-settings">
        <div>
          <h3 className="title">Notification settings</h3>
          <span className="description">
            We may still send you important notifications about your account
            outside of your notification settings.
          </span>
        </div>
        <div className="section-buttons">
          <button className="button btn-small btn-smaller btn-transparent">
            Cancel
          </button>
          <button className="button btn-small btn-smaller">Save</button>
        </div>
      </div>
      <div className="division-settings section-switches">
        <div className="block-info">
          <h3>Reviews</h3>
          <span>
            These are notifications for reviews left by your travelers
          </span>
        </div>
        <div className="container-switches">
          <Switch name="Push" />
          <Switch name="Email" />
          <Switch name="SMS" />
        </div>
      </div>
      <div className="division-settings section-switches">
        <div className="block-info">
          <h3>More activity about you</h3>
          <span>These are general notifications by admin</span>
        </div>
        <div className="container-switches">
          <Switch name="Push" />
          <Switch name="Email" />
          <Switch name="SMS" />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
