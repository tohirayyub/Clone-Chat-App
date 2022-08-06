import { BiGroup } from "react-icons/bi";
import { BsMegaphone, BsTelephone } from "react-icons/bs";
import { RiContactsLine,RiPushpinLine,RiSettings4Line } from "react-icons/ri";
import {BsMoon} from 'react-icons/bs'

export const SidebarData = [
  {
    id: 1,
    title: "Создать группу",
    icon: <BiGroup />,
    cName: "nav-text",
  },
  {
    id: 2,
    title: "Создать канал",
    icon: <BsMegaphone />,
    cName: "nav-text",
  },
  {
    id: 3,
    title: "Контакты",
    icon: <RiContactsLine />,
    cName: "nav-text",
  },
  {
    id: 4,
    title: "Звонки",
    icon: <BsTelephone />,
    cName: "nav-text",
  },
  {
    id: 5,
    title: "Избранное",
    icon: <RiPushpinLine />,
    cName: "nav-text",
  },
  {
    id: 6,
    title: "Настройки",
    icon: <RiSettings4Line />,
    cName: "nav-text",
  },
  {
    id: 7,
    title: "Ночной режим",
    icon: <BsMoon />,
    cName: "nav-text",
  },
];
