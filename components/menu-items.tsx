import {
  PiCurrencyDollarDuotone,
  PiPackageDuotone,
  PiShoppingCartDuotone,
  PiSquaresFourDuotone,
  PiUserGearDuotone,
} from "react-icons/pi";
import { CiSettings } from "react-icons/ci";

import { FaServer } from "react-icons/fa";

export const menuItems = [
  // label start
  {
    name: "Overview",
  },
  // label end
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <PiSquaresFourDuotone />,
  },
  {
    name: "Tools",
  },
  {
    name: "Ai Images",
    href: "#",
    icon: <PiShoppingCartDuotone />,
    dropdownItems: [
      {
        name: "Replicate Image",
        href: "/tools/image/replicate",
        icon: <PiSquaresFourDuotone />,
      },
      {
        name: "Gemeni Image",
        href: "/tools/image/gemeni",
        icon: <PiSquaresFourDuotone />,
      },
      {
        name: "Copilote Image",
        href: "/tools/image/copilote",
        icon: <PiSquaresFourDuotone />,
      },
    ],
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: <PiUserGearDuotone />,
  },
  {
    name: "Settings",
    href: "#",
    icon: <CiSettings />,
    dropdownItems: [
      {
        name: "Profile",
        href: "/dashboard/settings/profile",
        icon: <PiUserGearDuotone />,
      },
    ],
  },
];
