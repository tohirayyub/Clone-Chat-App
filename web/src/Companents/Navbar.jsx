import Popup from "./Popup";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SideBarData";
import "./Navbar.css";

export function Navbar({setSidebar,sidebar}) {
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <span>
          <GiHamburgerMenu onClick={showSidebar} />
        </span>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <span className="menu-bars">
              <AiOutlineClose />
            </span>
          </li>
          {SidebarData.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                {item.icon}
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
