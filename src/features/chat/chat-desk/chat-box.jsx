import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ChatBox = ({
  status,
  avatar,
  userName,
  location,
  userMessage,
  teamMessage,
}) => {
  return (
    <div className="chat-latest-msgs">
      <div className="section-profile">
        <div className="user-profile">
          <div className="prfoile-pic">
            <img src={avatar} alt="Profile Avatar" />
          </div>
          <div className="profile-info">
            <h3>{userName}</h3>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="section-messages">
        <div className="msg-user message">{userMessage}</div>
        <div className="msg-support-team message">{teamMessage}</div>
        {status === "pending" && <span className="time-info">8 mins ago</span>}
      </div>
      {status === "past" ? (
        <>
          <div className="section-rating">
            <h4>Chat Rating</h4>
            <div className="review-container">
              <div className="review">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className="rating">5/5</span>
            </div>
          </div>
          <div className="chat-close-info">Chat closed 3 days ago</div>
        </>
      ) : (
        <div className="section-answer">
          <Link to="/chatdesk/mark-lee" className="button btn-small btn-answer">Answer Now</Link>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
