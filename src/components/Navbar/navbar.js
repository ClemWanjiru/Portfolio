import React from "react";
import "./navbar.css";
import logo from "../../assests/logo4.png";
import contactImg from "../../assests/call-removebg-preview.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">HOME</Link>
        <Link className="desktopMenuListItem">ABOUT</Link>
        <Link className="desktopMenuListItem">PORTFOLIO</Link>
        <Link className="desktopMenuListItem">CLIENTS</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg" />
        CONTACT ME
      </button>
    </nav>
  );
};

export default Navbar;
