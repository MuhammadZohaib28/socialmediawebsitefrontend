import React from "react";
import "./post.css";
import postImage from "/src/assets/a.png";
import feedPostImage from "/src/assets/postimage.jpg";
import {
  HearingTwoTone,
  HeartBroken,
  MoreVert,
  ThumbUpAltSharp,
  ThumbUpSharp,
  ThumbsUpDown,
} from "@mui/icons-material";

const Post = () => {
  return (
    <div className="postContainer">
      <div className="postWrapper"></div>
      <div className="postTop">
        <div className="postTopLeft">
          <img src={postImage} alt="" className="postTopLeftImg" />
          <span className="postTopLeftName">Muhammad Zohaib</span>
          <span className="postTopLeftDate">5 mins ago</span>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <div className="postDiscriptionSection">
          <p className="postDiscription">
            Hello Kexayy hoe yaarr Hello Kexayy hoe yaarr Hello Kexayy hoe yaarr
            Hello Kexayy hoe yaarr Hello Kexayy hoe yaarr :)
          </p>
        </div>
      </div>
      <div className="postBottom">
        <div className="postBottomImgContainer">
          <img src={feedPostImage} alt="" className="postBottomImg" />
        </div>
        <div className="likeAndHeart">
          <div className="postCommentDiscription">
            <ThumbUpAltSharp htmlColor="blue" className="postIcon" />
            <HeartBroken htmlColor="#DE3163" />
            <span className="postLikeCounter">32 people like it.</span>
          </div>
          <p className="postComments">9 Comments.</p>  
        </div>
      </div>
    </div>
  );
};

export default Post;
