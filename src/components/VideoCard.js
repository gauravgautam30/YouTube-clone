const VideoCard = ({ info }) => {
  //   console.log("INFO:: ", info.snippet.title);
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className="w-72 p-2 m-2 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <div>
        {" "}
        <ul className="text-left">
          <li className="font-bold">{title}</li>
          <li>{channelTitle}</li>
          {(statistics.viewCount / 1000000).toFixed(1) < 1.0 ? (
            <li>{(statistics.viewCount / 1000).toFixed(1)}k views</li>
          ) : (
            <li>{(statistics.viewCount / 1000000).toFixed(1)}M views</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
