import React from "react";
import IconPlay from "../../../assets/images/chevron-right.png";
import VoiceFrame from "../../../assets/images/voice-frame.png";

const PanelChatWindow = () => {
  return (
    <div className="panel-chat-widnow">
      <div className="container-messages-chat">
        <div className="message-box message-box-user">
          <p className="message">
            Hi! Can you suggest any good outdoor activities within a short drive
            of downtown Honolulu? We have 2 kids with us.
          </p>
          <span className="time">Just now</span>
        </div>
        <div className="message-box message-box-support-team">
          <p className="message">
            <span>Hi Mark! It's Taylor here in Honolulu.</span>
            <span>I have a few favorites I'd be happy to share with you.</span>
            <span>
              (P.S. I don't earn commission on any of the recommendations I send
              you — only on the qualiy of service I provide!)
            </span>
          </p>
          <span className="time">10:35 am</span>
        </div>
        <div className="message-box voice-message message-box-user">
          <span className="user">Mark called</span>
          <p className="message">
            <span className="btn-play">
              <img src={IconPlay} alt="Icon Play" />
            </span>
            <img src={VoiceFrame} alt="Voice Frame" className="frame-voice" />
          </p>
          <span className="time">10:40 am</span>
        </div>
      </div>
    </div>
  );
};

export default PanelChatWindow;
