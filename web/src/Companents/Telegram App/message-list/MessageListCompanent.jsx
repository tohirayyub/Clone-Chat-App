import "./MessageLisrStyle.css";

export function MessageListCompanent({ contact, messages }) {
  return (
    <div className="main__chat">
      {messages
        .filter(
          ({ sender, receiver }) =>
            (sender === 1000 && receiver === contact.id) ||
            (sender === contact.id && receiver === 1000)
        )
        .map((message) => (
          <ul
            style={{
              marginLeft: message.sender === 1000 ? "50px" : "",
              marginRight: message.sender === contact.id ? "50px" : "",
              padding: 0,
              display: "flex",
              justifyContent:
                message.sender === 1000 ? "flex-end" : "flex-start",
            }}
            key={message.id}
          >
            <li
              style={{
                wordBreak: "break-all",
                background: message.sender === 1000 ? "#0a76f9" : "#3f4152",
                borderRadius:
                  message.sender === 1000
                    ? "15px 15px 0px 15px"
                    : "15px 15px 15px 0px",
              }}
            >
              {message.text}
            </li>
          </ul>
        ))}
    </div>
  );
}
