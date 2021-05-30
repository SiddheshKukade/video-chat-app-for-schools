import React from "react";
import { ChatWindow } from "./ChatWindow/ChatWindow";
import ChatInput from "./ChatInput/ChatInput";
import styles from "./Chat.module.css";

const Chat = () => {
  return (
    <div className={styles.container}>
      <ChatWindow />
      <ChatInput />
    </div>
  );
};

export default Chat;
