import React from "react";
import Avatar from "../../../../assets/images/avatar.png";

const UserProfile = () => {
  return (
    <div className="section-user-profile">
      <img src={Avatar} alt="Profile Avatar" className="prfoile-pic" />
      <div className="profile-info">
        <h3>Mark Lee</h3>
        <span>Austin</span>
      </div>
    </div>
  );
};

export default UserProfile;
