import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import store from "../utils/appStore";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex">
      {isMenuOpen ? (
        <div className="flex w-48 shadow-lg px-6 mr-0 text-center">
          <Sidebar />
        </div>
      ) : null}
      <Outlet />
    </div>
  );
};

export default Body;
