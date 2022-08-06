//TELEGRAM APP

import { useEffect, useState } from "react";
import { ContactListCompanent } from "./Companents/Telegram App/left-panel/ContactListCompanent";
import { MessageHeaderCompanent } from "./Companents/Telegram App/message-header/MessageHeaderCompanent";
import { MessageInputCompanent } from "./Companents/Telegram App/message-input/MessageInputCompanent";
import { MessageListCompanent } from "./Companents/Telegram App/message-list/MessageListCompanent";
import { SearchCompanent } from "./Companents/Telegram App/search-messanger/SearchCompanent";
import { AccountUser } from "./Companents/Telegram App/account-user/AccountUser";
import "./App.css";

export default function App() {
  const [selectedContact, setSelectedContact] = useState("");
  const [messages, setMessages] = useState([]);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/message-list")
      .then((res) => res.json())
      .then((loadMessages) => setMessages(loadMessages));
  }, [messages]);


  return (
    <div>
      <div>
        <SearchCompanent
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
        <div style={{ display: "flex" }}>
          <div>
            <ContactListCompanent
              onContactSelect={(contact) => setSelectedContact(contact)}
            />
          </div>
          <div className="right__container">
            <MessageHeaderCompanent contact={selectedContact} />
            <MessageListCompanent
              messages={messages}
              contact={selectedContact}
            />
            <MessageInputCompanent
              setMessages={setMessages}
              messages={messages}
              contact={selectedContact}
            />
          </div>
          <div className="account__user">
            <AccountUser contact={selectedContact} />
          </div>
        </div>
      </div>
    </div>
  );
}
