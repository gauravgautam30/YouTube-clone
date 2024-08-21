import React, { useEffect, useState } from "react";
import { VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    getVideosData();
  }, []);

  const getVideosData = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    // console.log(json);
    // console.log(json.items);
    setVideoData(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videoData.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
