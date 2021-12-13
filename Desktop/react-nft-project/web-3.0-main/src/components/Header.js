import React from "react";
import "./Header.css";
import logo from "../assets/header/marvel.png";
import searchIcon from "../assets/header/search.png";
import themeSwichIcon from "../assets/header/theme-switch.png";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={logo} className="logo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} />
        </div>
        <input
          className="searchInput"
          placeholder="Colection, item or user ..."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwichContainer">
          <img src={themeSwichIcon} />
        </div>
      </div>
      <div className="loginButton">GET IN</div>
    </div>
  );
}

export default Header;
