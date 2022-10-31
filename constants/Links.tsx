import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Peerlist from "../assets/images/peerlist_icon.png";

export const Links = [
  {
    name: "Gmail",
    href: "mailto:manavendra4288@gmail.com?subject=Let's Connect",
    icon: <MdEmail />,
    primaryColor: "#ea4335",
    color: "#ffffff",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/manavendrasen/",
    icon: <FaLinkedinIn />,
    primaryColor: "#0077B5",
    color: "#ffffff",
  },
  {
    name: "Github",
    href: "https://github.com/manavendrasen",
    icon: <FaGithub />,
    primaryColor: "#23272D",
    color: "#ffffff",
  },
  {
    name: "Behance",
    href: "https://www.behance.net/manavendrasen",
    icon: <FaBehance />,
    primaryColor: "#0057FF",
    color: "#ffffff",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCEcCKqet47IWQFRt9zfGw8Q",
    icon: <FaYoutube />,
    primaryColor: "#FF0000",
    color: "#ffffff",
  },
  {
    name: "Devpost",
    href: "https://devpost.com/manavendrasen",
    icon: <SiDevpost />,
    primaryColor: "#00394E",
    color: "#ffffff",
  },
];
