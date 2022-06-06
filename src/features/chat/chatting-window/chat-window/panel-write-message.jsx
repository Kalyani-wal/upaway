import React, { useState } from "react";
import { Fade, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import IconAttachment from "../../../../assets/images/icon-attachment.png";
import IconEmoji from "../../../../assets/images/icon-emoji.png";
import IconSend from "../../../../assets/images/icon-send.png";

const PanelWriteMessage = () => {
  const [isOpenFile, setIsOpenFile] = useState(false);
  const toggleFile = () => setIsOpenFile(!isOpenFile);

  const [isOpenEmoji, setIsOpenEmoji] = useState(false);
  const toggleEmoji = () => setIsOpenEmoji(prevState => !prevState);

  return (
    <div className="container-write-messages">
      <div className="options-left">
        <div className="button-holder">
          <Dropdown toggle={toggleFile} isOpen={isOpenFile}>
            <DropdownToggle className="button-link">
              <img src={IconAttachment} alt="Icon attachment" />
            </DropdownToggle>
            <DropdownMenu className="fade-content">
              <button className="button-link">Browse file</button>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="button-holder">
          <Dropdown toggle={toggleEmoji} isOpen={isOpenEmoji}>
            <DropdownToggle className="button-link">
              <img src={IconEmoji} alt="Icon Emoji" />
            </DropdownToggle>
            <DropdownMenu className="fade-content wrapper-emojis">
              <p>Emoji's plugin comes here.</p>
            </DropdownMenu>
          </Dropdown>
        </div>
        {/* <div className="button-holder">
          <button
            className="button-link"
            onClick={() => setIsOpenEmoji(!isOpenEmoji)}
          >
            <img src={IconEmoji} alt="Icon Emoji" />
          </button>
          <Fade in={isOpenEmoji} className="wrapper-emojis">
            Emoji's plugin comes here.
          </Fade>
        </div> */}
      </div>
      <div className="input-holder">
        <div id="textbox">Type a message here...</div>
        <div
          title="Type a message here..."
          role="textbox"
          contentEditable="true"
          className="textarea-message"
        ></div>
      </div>
      <div className="options-right">
        <button className="button-link button-send">
          <img src={IconSend} alt="Icon attachment" />
        </button>
      </div>
    </div>
  );
};

export default PanelWriteMessage;
