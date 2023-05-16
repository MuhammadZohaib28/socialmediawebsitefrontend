import React from "react";
import "./topbar.css";
import { Chat, Home, Notifications, Person, Search } from "@mui/icons-material";
import logoImage from '/src/assets/logo.png';
import profileImage from '/src/assets/a.png';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img
          src={logoImage}
          alt="Zohaib logo image"
          className="logo"
        />
      </div>
      <div className="topbarCenter">
        <div className="search">
          <Search />
          <input placeholder="Search for friends" className="searchbar" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <div className="topbarLink">Homepage</div>
          <div className="topbarLink">Timeline</div>
        </div>

        <div className="topbarIcons">
          <div className="topbarIcon">
            <Person />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIcon">
            <Chat />
            <span className="topbarIconBadge chat">3</span>
          </div>
          <div className="topbarIcon">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src={profileImage} alt="" className="topbarImage" />
      </div>
    </div>
  );
};

export default Topbar;
