import React from "react";
import Button from "./Button";
const buttons = [
  "Live",
  "Cricket",
  "Movies",
  "Soccer",
  "Songs",
  "Bollywood",
  "News",
  "Cinema",
  "Films",
  "Shorts",
  "Music",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {buttons.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
