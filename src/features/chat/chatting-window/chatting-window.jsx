import React from "react";
import PageLayout from "../../../common/components/layout/page-layout";
import PanelUserDetails from "./user-details/panel-user-details";
import PanelChatWindow from "./chat-window";

const ChatWindow = () => {
  return (
    <PageLayout className="wrapper-page-layout-chat-window">
      <div className="container-chat-window">
        <PanelUserDetails />
        <PanelChatWindow />
      </div>
    </PageLayout>
  );
};

export default ChatWindow;
