import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "../../SideBarData";
import "../../Navbar.css";
import { ModalContact } from "../modal-contact/ModalContact";
import { useState } from "react";

export function Sidebar({ menuActive, setMenuActive }) {
  const showSidebar = () => setMenuActive(!menuActive);

  return (
    <>
      <div className="navbar">
        <AiOutlineMenu className="burger" onClick={showSidebar} />
      </div>
      <nav className={menuActive ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          {/* <span className="menu-bars">
            <AiOutlineClose />
          </span>
          {SidebarData.map((item) => {
            return (
              <li onClick={()=> setActiveContactModal(true)} key={item.id} className={item.cName}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            );
          })} */}
          {/* <li>
            <span>Контакти</span>
          </li> */}
          <ModalContact />
        </ul>
      </nav>
    </>
  );
}
