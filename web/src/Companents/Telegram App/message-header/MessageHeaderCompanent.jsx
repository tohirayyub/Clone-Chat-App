import { BsThreeDotsVertical } from "react-icons/bs";
import "./MessageHeaderStyle.css";

export function MessageHeaderCompanent({ contact }) {
  if (!contact) return;
  return (
    <div className="header__top">
      <div className="header__flexed">
        <img src={contact.avatar} width={60} alt="" />
        <div className="header__titles">
          <span style={{ fontWeight: "700", fontSize: '25px' }}>{contact.name}</span>
          <span>online</span>
        </div>
      </div>
      <BsThreeDotsVertical />
    </div>
  );
}
