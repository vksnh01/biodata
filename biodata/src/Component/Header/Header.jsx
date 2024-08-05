import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../IMG/logocopy.ico";
import { RiCloseLargeLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import headerData from "./HeaderData";
import { NavLink } from "react-router-dom";

function Header() {
  const [navBool, setNavBool] = useState(true);
  const [navButton, setNavButton] = useState([]);
  useEffect(() => {
    setNavButton(headerData);
  }, []);
  return (
    <div className="header-main-div">
      <div className="res-btn">
        {!navBool ? (
          <span onClick={() => setNavBool(!navBool)}>
            <RiCloseLargeLine className="res-icon" />
          </span>
        ) : (
          <span onClick={() => setNavBool(!navBool)}>
            <GiHamburgerMenu className="res-icon" />
          </span>
        )}
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-btn">
        <ul className={navBool ? "hide" : "show"}>
          {navButton.map((elem, ind) => {
            return (
              <>
                <li >
                  <NavLink onClick={() => setNavBool(!navBool)} exact to={elem.path} key={ind}>
                    {elem.name}
                  </NavLink>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
