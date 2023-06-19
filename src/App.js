import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  let maxHeigth;
  if (window.innerHeight <= 800) {
    maxHeigth = window.innerHeight;
  }

  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const videoCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videoCollection);

    const videosList = videosSnapshot.docs.map((doc) => doc.data());

    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeigth + "px" }}>
      <div className="app_video">
        {videos.map((video) => {
          return (
            <Video
              likes={video.likes}
              messages={video.messages}
              shares={video.shares}
              name={video.name}
              description={video.description}
              music={video.music}
              url={video.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
