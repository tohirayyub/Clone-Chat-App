import { useState } from "react";

export function Local() {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onClick() {
    const oldMessages = messageString ? JSON.parse(messageString) : [];
    const lastId = oldMessages.length
      ? oldMessages[oldMessages.length - 1].id
      : 0;

    const messages = [
      ...oldMessages,
      { id: lastId + 1, text: text, sender: 1000, receiver: 1 },
    ];
    localStorage.setItem("messagesNEW", JSON.stringify(messages));
  }

  const messageString = localStorage.getItem("messagesNEW");
  return (
    <div>
      <input onChange={onChange} type="text" />
      <button onClick={onClick}>Send</button>
      <div>
        {messageString.map((el) => (
          <span key={el.id}>{el.text}</span>
        ))}
      </div>
    </div>
  );
}
