import React from "react";
import PageLayout from "../../../common/components/layout/page-layout";

const ChatDesk = () => {
  return (
    <PageLayout className="wrapper-page-layout-chatdesk" headerText="Chat Desk">
      <div className="container-chat-boxes">
        <div className="chat-box">
          <div className="chat-status">
            <div className="status">
              Active <span className="count">2</span>
            </div>
            <span>...</span>
          </div>
          <div className="chat-latest-msgs">
            <div className="section-profile">
              <div className="user-profile">
                <div className="prfoile-pic">
                  <img src="" alt="" />
                </div>
                <div className="profile-info">
                  <h3>Mark Lee</h3>
                  <span>Austin</span>
                </div>
              </div>
              <span>...</span>
            </div>
            <div className="section-messages">
              <div className="user-msg">
                Hi! Can you suggest any good outdoor activities within a short
                drive of downtown Honolulu? We have 2 kids with us.
              </div>
              <div className="support-team-msg">
                Let me look into it. I'll get right back to you!
              </div>
            </div>
            <div className="section-more-info">
              <button className="button btn-small">Answer Now</button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ChatDesk;
