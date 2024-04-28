import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import LiveChatContainer from "./LiveChatContainer";
// import store from '../utils/store'
const Body = () => {

  return (
    <div className="flex ">
      <Sidebar />
      <Outlet/>
    </div>
  );
};

export default Body;
