import { useEffect, useState } from "react";

const ChannelData = ({ VideoId }) => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getChannelData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getChannelData = async () => {
    console.log("VIDEO ID", VideoId);
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${VideoId}&key=AIzaSyD0N6ksXsmMdkjUrm7BOkfg6NvLbIwRLQI`
    );
    const json = await data.json();
    console.log(json.items[0].snippet);
    setVideoData(json.items[0].snippet);
  };
  return (
    <div className="border border-slate-500 shadow-md p-2 my-2">
      <h1 className="text-left p-2 font-bold text-2xl w-[49rem]">
        {videoData.title}
      </h1>
      <div className="flex p-2 m-2 ml-0">
        <div>
          <img
            className="w-12 h-12"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
        <div>
          <h1 className="font-bold  m-3">{videoData.channelTitle}</h1>
        </div>
        <div>
          <button className="m-3 p-2 bg-black text-white rounded-full font-bold">
            Subscribe 🔽
          </button>
          <button className="ml-60 m-3 p-2 bg-black text-white rounded-full font-bold">
            {" "}
            👍 Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChannelData;
