import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import store from "../utils/appStore";

const Sidebar = () => {
  // const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // console.log(isMenuOpen);
  // if (!isMenuOpen) return null;
  return (
    <div className="pl-4 p-2 m-2">
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold py-2">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Movies</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold py-2">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Movies</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold py-2">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Movies</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
