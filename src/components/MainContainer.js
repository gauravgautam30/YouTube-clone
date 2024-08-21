import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div>
      <div>
        <ButtonList />
      </div>

      <div>
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
