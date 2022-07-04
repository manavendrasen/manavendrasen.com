import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import Peerlist from "../assets/images/peerlist_icon.png";

export const Links = [
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
    name: "Peerlist",
    href: "https://peerlist.io/manavendrasen",
    icon: <Image src={Peerlist} alt="" width={20} height={20} />,
    primaryColor: "#00AA45",
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
