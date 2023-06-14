import React, { useRef, useState } from "react";
import "./video.css";

function Video() {
  const videoref = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
    if (play) {
      videoref.current.pause();
      setPlay(false);
    } else {
      videoref.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoref}
        onClick={handleStart}
        loop
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
      ></video>
    </div>
  );
}

export default Video;
