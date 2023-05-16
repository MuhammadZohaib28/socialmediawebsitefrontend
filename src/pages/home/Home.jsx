import React from "react";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import FriendListBar from "../../components/friendlistbar/FriendListBar";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
      <FriendListBar />
    </>
  );
};

export default Home;
