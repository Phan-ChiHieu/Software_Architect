"use client";

import styles from "./chat.module.css";

import React, { useState } from "react";

type MsgProps = {
  role: "user" | "assistant" | "code";
  text: string;
};

export default function AddMsgClient() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<MsgProps[]>([]);
  const [inputDisabled, setInputDisabled] = useState(false);

  const appendMessage = ({ role, text }: MsgProps) => {
    setMessages((prevMessages) => [...prevMessages, { role, text }]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //==============================START:==================================
    // * Kiểm tra đầu vào: Nếu userInput (nội dung người dùng nhập) là chuỗi rỗng hoặc chỉ chứa khoảng trắng, hàm sẽ dừng lại và không thực hiện bất kỳ hành động nào.
    if (!userInput.trim()) return;
    //==============================END:==================================

    console.log("userInput", userInput);

    // funtion lưu vào data hoặc call api nào đó...
    // sendMessage(userInput);

    //==============================START:==================================
    // * Sử dụng setMessages để thêm tin nhắn mới của người dùng vào danh sách tin nhắn hiện tại.
    setMessages((prevMessages) => [...prevMessages, { role: "user", text: userInput }]);
    // * Đặt lại userInput thành chuỗi rỗng để làm sạch trường nhập.
    setUserInput("");
    // * Đặt inputDisabled thành true để ngăn người dùng gửi tin nhắn mới cho đến khi có phản hồi.
    setInputDisabled(true);
    //==============================END:==================================

    // scrollToBottom();
  };

  console.log("messages array", messages);

  return (
    <div>
      <h1>AddMsgClient</h1>
      <form onSubmit={handleSubmit} className={`${styles.inputForm} ${styles.clearfix}`}>
        <input
          type="text"
          className={styles.input}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your question"
        />
        <button type="submit" className={styles.button} disabled={inputDisabled}>
          Send
        </button>
      </form>
    </div>
  );
}
