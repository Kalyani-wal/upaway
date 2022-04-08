import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProfileAvatar from "../../assets/images/profile-avatar.jpeg";
import { Progress } from "reactstrap";

const Profile = () => {
  return (
    <div className="container-profile">
      <div className="top-header"></div>
      <div className="profile-info">
        <img src={ProfileAvatar} alt="Avatar" />
        <h3>Olivia Rhye</h3>
        <span>olivia@email.com</span>
      </div>
      <div className="section-reviews">
        <h3>My reviews</h3>
        <div className="section-progress-bar">
          <div className="icon-holder">
          I
          </div>
          <div className="container-progress-bar">
            <div className="section-top">
              <span>Avg Rating (356)</span>
              <span>4/5</span>
            </div>
            <Progress value={80} />
          </div>
        </div>

        <p className="comment">
          Olivia was incredible! She saved us when our rental fell through and
          found us the most perfect under-the-radar boutique hotel that was
          eco-friendly AND close to all the hot spots. Five stars!
        </p>
        <div className="customer-info-container">
          <img src={ProfileAvatar} alt="Avatar" />
          <div className="customer-info">
            <h3>Nikky Change</h3>
            <span>yesterday 4:44 pm</span>
          </div>
          <div className="review">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
