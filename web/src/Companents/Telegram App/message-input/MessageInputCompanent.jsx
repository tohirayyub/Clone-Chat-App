import "./MessageInputStyle.css";
import { MdSend } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

export function MessageInputCompanent({
  contact,
  // countMessages,
  // setCountMessages,
  // messages,
}) {
  const [inputText, setInputText] = useState("");
  const draft = localStorage.getItem("draft");
  const drafts = draft ? JSON.parse(draft) : [];

  useEffect(() => {
    const draft = drafts.find((draft) => {
      return draft.id === contact.id;
    });
    if (draft) {
      setInputText(draft.text);
    } else {
      setInputText("");
    }
  }, [contact]);

  function onChange(e) {
    if (!contact.id) return;
    const value = e.target.value;
    setInputText(value);
    const draft = drafts.find((draft) => {
      return draft.id === contact.id;
    });
    if (draft) {
      draft.text = value;
    } else {
      drafts.push({
        id: contact.id,
        text: value,
      });
    }
    localStorage.setItem("draft", JSON.stringify(drafts));
  }

  // function onEnterSendMessage(event) {
  //   if (event.key === "Enter" && inputText !== "") {
  //     const messageString = localStorage.getItem("messagesNEW");
  //     const oldMessages = messageString ? JSON.parse(messageString) : [];
  //     const lastId = oldMessages.length
  //       ? oldMessages[oldMessages.length - 1].id
  //       : 0;
  //     const messages = [
  //       ...oldMessages,
  //       { id: lastId + 1, text: inputText, sender: 1000, receiver: contact.id },
  //     ];
  //     localStorage.setItem("messagesNEW", JSON.stringify(messages));
  //     setMessages(messages);
  //     setInputText("");
  //     localStorage.removeItem('draft')
  //   }
  // }

  function onSendMessage() {
    if (inputText !== "") {
      fetch(`http://localhost:3001/message-save`, {
        method: "post",
        body: JSON.stringify({
          text: inputText,
          sender: 1000,
          receiver: contact.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // setCountMessages(countMessages + 1);
    }
    localStorage.removeItem("draft");
    setInputText("");
    // console.log(messages);
    // if (inputText !== "") {
    //   const messageString = localStorage.getItem("messagesNEW");
    //   const oldMessages = messageString ? JSON.parse(messageString) : [];
    //   const lastId = oldMessages.length
    //     ? oldMessages[oldMessages.length - 1].id
    //     : 0;

    //   const messages = [
    //     ...oldMessages,
    //     { id: lastId + 1, text: inputText, sender: 1000, receiver: contact.id },
    //   ];
    //   localStorage.setItem("messagesNEW", JSON.stringify(messages));
    //   setMessages(messages);
    //   setInputText("");
    // }
  }

  return (
    <div>
      <div className="input__message">
        <input
          onChange={onChange}
          placeholder="Message"
          type="text"
          value={inputText}
          // onKeyDown={onEnterSendMessage}
        />
        <div onClick={onSendMessage} className="btn__sender">
          <MdSend />
        </div>
      </div>
    </div>
  );
}
