"use client";

import React, { useState } from "react";

export default function BasicClient() {
  const [userInput, setUserInput] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /*
        - Chuỗi không rỗng sẽ được coi là true
        - Chuỗi rỗng ("") sẽ được coi là false

      Khi thêm dấu !, giá trị này sẽ bị đảo ngược:
        - Nếu userInput.trim() trả về chuỗi rỗng, !userInput.trim() sẽ trả về true
        - Nếu userInput.trim() trả về chuỗi không rỗng, !userInput.trim() sẽ trả về false
     */
    if (!userInput.trim()) return;
    setUserInput("");
    setInputDisabled(true);
  };

  return (
    <div>
      <h1>BasicClient</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Enter your question" />
        <button type="submit" disabled={inputDisabled}>
          Send
        </button>
      </form>
    </div>
  );
}
