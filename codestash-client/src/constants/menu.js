import { RiHome2Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

export const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: RiHome2Line,
        label: "Home",
        href: "/dashboard",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: FiUser,
        label: "Profile",
        href: "/dashboard",
      },
    ],
  },
];
