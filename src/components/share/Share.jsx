import React from "react";
import "./share.css";
import profileImage from "/src/assets/a.png";
import {
  EmojiEmotions,
  Label,
  PermMedia,
  Room,
  RoomOutlined,
  RoomPreferencesTwoTone,
  RoomRounded,
} from "@mui/icons-material";

const Share = () => {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={profileImage} alt="" className="shareProfileImage" />
          <input placeholder="What's in your mind ?" className="shareInput" />
        </div>
        {/* <hr /> */}
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>

            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>

            <div className="shareOption">
              <RoomRounded htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>

            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Emoji</span>
            </div>

          </div>
        </div>
            <button className="shareButton">Share</button>
      </div>
    </div>
  );
};

export default Share;
