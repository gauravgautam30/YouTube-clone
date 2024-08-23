import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMemu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import ChannelData from "./ChannelData";
import LiveChat from "./LiveChat";

const WatchPage = ({ videoData }) => {
  const [params] = useSearchParams([]);
  console.log("PARAMS", params.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMemu());
  }, []);

  return (
    <div className="w-full">
      <div className="px-5  w-full">
        <div className="flex flex-wrap">
          <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + params.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div>
            <LiveChat />
          </div>
          <ChannelData VideoId={params.get("v")} />
        </div>
        <div>
          <CommentsContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
