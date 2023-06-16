import React, { useState } from "react";
import "./videoSidebar.css";
import { FavoriteBorder, Favorite, Chat, Share } from "@mui/icons-material";

function VideoSidebar({likes, messages, shares}) {
  const [liked, setLiked] = useState(false);
  function handdleLike() {
    setLiked(!liked);
  }
  return (
    <div className="videoSidebar">
      <div className="videoSidebar_options" onClick={handdleLike}>
        {liked ? (
          <Favorite fontSize="large" />
        ) : (
          <FavoriteBorder fontSize="large" />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_options">
        <Chat fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_options">
        <Share fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
