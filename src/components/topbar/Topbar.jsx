import React from "react";
import "./topbar.css";
import { Chat, Home, Notifications, Person, Search } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img
          src="/src/assets/logo.png"
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
        <img src="/src/assets/a.png" alt="" className="topbarImage" />
      </div>
    </div>
  );
};

export default Topbar;
