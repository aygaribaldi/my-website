import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome style={{ color: "black" }} />,
    cName: "nav-text",
  },
  {
    title: "About Me",
    path: "#",
    icon: <FaIcons.FaUser style={{ color: "black" }} />,
    cName: "nav-text",
  },
  {
    title: "Work Experience",
    path: "#",
    icon: <FaIcons.FaFileCode style={{ color: "black" }} />,
    cName: "nav-text",
  },

  {
    title: "Designs",
    path: "#",
    icon: <FaIcons.FaClone style={{ color: "black" }} />,
    cName: "nav-text",
  },

  {
    title: "Contact",
    path: "#",
    icon: <FaIcons.FaEnvelopeOpenText style={{ color: "black" }} />,
    cName: "nav-text",
  },
];
