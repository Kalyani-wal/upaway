import React from "react";
import PageLayout from "../../../common/components/layout/page-layout";
import Avatar from "../../../assets/images/avatar.png";
import ChatBox from "./chat-box";

const ChatDesk = () => {
  return (
    <PageLayout className="wrapper-page-layout-chatdesk" headerText="Chat Desk">
      <div className="container-chat-boxes">
        <div className="chat-box">
          <div className="chat-status">
            <div className="status">
              Active <span className="count">1</span>
            </div>
            {/* <span>...</span> */}
          </div>
          <div className="container-messages">
            <ChatBox
              avatar={Avatar}
              userName="Mark Lee"
              location="Austin"
              userMessage="Hi! Can you suggest any good outdoor activities within a short
                drive of downtown Honolulu? We have 2 kids with us."
            />
          </div>
        </div>
        <div className="chat-box chat-box-pending">
          <div className="chat-status">
            <div className="status">
              Pending <span className="count">1</span>
            </div>
            {/* <span>...</span> */}
          </div>
          <div className="container-messages">
            <ChatBox
              status="pending"
              avatar={Avatar}
              userName="Mark Lee"
              location="Austin"
              userMessage="That sounds like a great solution! :) Is there a student discount available?"
              teamMessage="Let me look into it. I'll get right back to you!"
            />
          </div>
        </div>
        <div className="chat-box chat-box-past">
          <div className="chat-status">
            <div className="status">
              Past <span className="count">2</span>
            </div>
            {/* <span>...</span> */}
          </div>
          <div className="container-messages">
            <ChatBox
              status="past"
              avatar={Avatar}
              userName="Mark Lee"
              location="Austin"
              userMessage="No, that’s all. Thank you so much."
              teamMessage="My pleasure!"
            />
            <ChatBox
              status="past"
              avatar={Avatar}
              userName="Mark Lee"
              location="Austin"
              userMessage="No, that’s all. Thank you so much."
              teamMessage="My pleasure!"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ChatDesk;
