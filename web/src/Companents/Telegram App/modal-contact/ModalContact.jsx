import { useEffect, useState } from "react";
import "./ModalContact.css";
import { ContactsData } from "../data/Contacts.Data";

export function ModalContact() {
  const [modal, setModal] = useState(false);
  // const [contacts, setContacts] = useState([]);
  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [numberValue, setNumberValue] = useState();
  const [avatarValue, setAvatarValue] = useState('');

  const toggleModal = () => {
    setModal(!modal);
  };


  function onAddContact() {
    fetch(
      `http://localhost:3001/contacts-save?name=${nameValue}&&surname=${surnameValue}&&phone=${numberValue}`
    );
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Контакт
      </button>
      {modal && (
        <div className="modal overlay">
          <div className="modal-content">
            <>
              <input type="text" value={nameValue} onChange={(e)=> setNameValue(e.target.value) } placeholder="Name" /> <br />
              <input type="text" value={surnameValue} onChange={(e)=> setSurnameValue(e.target.value)} placeholder="Surname" /> <br />
              <input type="number" value={numberValue} onChange={(e)=> setNumberValue(e.target.value)} placeholder="Number" /> <br />
            </>
        <button onClick={onAddContact}>ADD</button>
            <button onClick={toggleModal} className="close">
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
