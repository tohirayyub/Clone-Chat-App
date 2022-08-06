import { IoMdNotificationsOutline } from "react-icons/io";
import { BiCaretDownCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "./logo-removebg-preview.png";
import "./SearchStyle.css";
import { Sidebar } from "../sidebar/Sidebar";

export function SearchCompanent({ menuActive, setMenuActive }) {
  return (
    <div>
      <div className="top__companent">
        <Sidebar menuActive={menuActive} setMenuActive ={setMenuActive }/>
        <img src={logo} alt="logo" width={50} />
        <span className="name__app">Chatgram</span>
        <input placeholder="Search" className="input__search" type="text" />
        {/* <div style={{ display: "flex" }}>
          <IoMdNotificationsOutline style={{ marginRight: "40px" }} />
          <Link to={"/accountUser"}>
            <div>
              <img src="" alt="" />
              <span>Deena Dhayalan</span>
              <BiCaretDownCircle />
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
