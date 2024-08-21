import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMemu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [params] = useSearchParams([]);
  console.log(params.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMemu());
  }, []);

  return (
    <div className="w-96">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + params.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
