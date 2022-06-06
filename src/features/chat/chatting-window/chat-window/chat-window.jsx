import React from "react";
import { Progress } from "reactstrap";
import IconPlay from "../../../../assets/images/chevron-right.png";
import VoiceFrame from "../../../../assets/images/voice-frame.png";
import IconFile from "../../../../assets/images/icon-file-message.png";
import IconClose from "../../../../assets/images/icon-close.png";
import PanelWriteMessage from "./panel-write-message";

const PanelChatWindow = () => {
  return (
    <div className="panel-chat-widnow">
      <div className="container-messages-chat">
        <div className="container-messages-chat-inner">
          <div className="message-box message-box-user">
            <div className="message-holder">
              <p className="message">
                Hi! Can you suggest any good outdoor activities within a short
                drive of downtown Honolulu? We have 2 kids with us.
              </p>
              <span className="time">Just now</span>
            </div>
          </div>
          <div className="message-box message-box-support-team">
            <div className="message-holder">
              <p className="message">
                <span>Hi Mark! It's Taylor here in Honolulu.</span>
                <span>
                  I have a few favorites I'd be happy to share with you.
                </span>
                <span>
                  (P.S. I don't earn commission on any of the recommendations I
                  send you — only on the qualiy of service I provide!)
                </span>
              </p>
              <span className="time">10:35 am</span>
            </div>
          </div>
          <div className="message-box voice-message message-box-user">
            <div className="message-holder">
              <span className="user">Mark called</span>
              <p className="message">
                <div className="play-btn-holder">
                  <span className="btn-play">
                    <img src={IconPlay} alt="Icon Play" />
                  </span>
                  <span className="time duration">2:34</span>
                </div>
                <div>
                  <img
                    src={VoiceFrame}
                    alt="Voice Frame"
                    className="frame-voice"
                  />
                </div>
              </p>
              <span className="time">10:40 am</span>
            </div>
          </div>
          <div className="message-box message-box-support-team">
            <div className="message-holder">
              <p className="message">
                The family pass to Kualoa Ranch is $124.50 for two adults and
                one child under age 13. Just tap the button above to submit your
                payment!
              </p>
              <span className="time">10:35 am</span>
            </div>
          </div>
          <div className="message-box message-box-user">
            <div className="message-holder">
              <p className="message">That’s great! Thanks</p>
              <span className="time">Just now</span>
            </div>
          </div>
          <div className="payment-box">
            <div className="info">
              <span className="message">Booking Fee Due</span>
              <strong className="amount">$ 124.50</strong>
            </div>
            <button className="button btn-small btn-payment">
              Enter Payment
            </button>
          </div>
          <div className="payment-box payment-box-received">
            <div className="info">
              <span className="message">All Set!</span>
              <strong className="amount">$ 124.50</strong>
            </div>
            <div className="payment-confirmation">Payment Accepted</div>
          </div>
          <div className="file-upload-box">
            <img src={IconFile} alt="Icon File" className="file-icon" />
            <div className="file-upload-progress">
              <div className="text-holder">
                <span className="upload-text">Uploading File... 40%</span>
                <span className="close-btn">
                  <img src={IconClose} alt="Icon Close" />
                </span>
              </div>
              <Progress value={40} />
            </div>
          </div>
          <div className="file-upload-box">
            <img src={IconFile} alt="Icon File" className="file-icon" />
            <div className="file-upload-progress">
              <div className="text-holder text-holder-size">
                <span className="upload-text">Booking.pdf</span>
                <span className="size">570 KB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PanelWriteMessage />
    </div>
  );
};

export default PanelChatWindow;
