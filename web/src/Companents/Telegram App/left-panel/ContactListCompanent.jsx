import { useState } from "react";
import { useEffect } from "react";
// import { ContactsData } from "../data/Contacts.Data";
import "./ContactListStyle.css";


export function ContactListCompanent({ onContactSelect }) {

  const [contacts, setContacts] = useState([])

  const onClickSelect = (contact) => {
    onContactSelect(contact);
  };

  useEffect(() => {
    fetch("http://localhost:3001/contacts-list")
    .then((res)=> res.json())
    .then((loadContacts)=> setContacts(loadContacts))
  },[]);

  return (
    <div className="contact__list">
      {contacts.map((contact) => (
        <div
          className="contact__user"
          key={contact.id}
          onClick={() => onClickSelect(contact)}
        >
          <div style={{ display: "flex", height: "62px" }}>
            <div>
              <img
                style={{ width: "62px", height: "62px", borderRadius: "10px" }}
                src={contact.avatar}
                alt={contact.name}
              />
            </div>
            <div>
              <h4 className="contact__nameUser">{contact.name}</h4>
            </div> 
          </div>
        </div>
      ))}
    </div>
  );
}
