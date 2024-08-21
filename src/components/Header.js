import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const HandleClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => HandleClick()}
          className="h-12 p-2 m-2 cursor-pointer"
          alt="three line"
          src="https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-14.jpg"
        />

        <img
          className="h-16"
          alt="youtube"
          src="https://th.bing.com/th/id/OIP._IfEaUssjZQwZ1u92b1_GgHaEK?rs=1&pid=ImgDetMain"
        />
      </div>
      <div className="col-span-10">
        <input
          className="w-1/2 p-2  rounded-full rounded-r-none mt-2"
          type="text"
          placeholder="Search"
        />
        <button className="rounded-r-full bg-gray-400 p-2">🔍</button>
      </div>
      <div className="col-span-1">
        <img
          className="h-12 p-2 m-2"
          alt="user-icon"
          src="https://th.bing.com/th/id/OIP._BXCcqxwmsduYNCJj2XDtgHaHa?rs=1&pid=ImgDetMain"
        />
      </div>
    </div>
  );
};

export default Header;
