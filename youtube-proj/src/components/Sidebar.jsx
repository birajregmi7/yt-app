import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateSearchedData } from "../utils/searchDataSlice";
const Sidebar = () => {
  const dispatch = useDispatch();
  const menuData = useSelector((store) => store.sidebar.isMenuOpen);
  console.log(menuData);
  {
    if (menuData == false) return null;
  }
  return (
    <>
      <div className="shadow-lg min-w-44 min-h-screen ">
        <ul className="border-b-2  font-bold ">
          <li>
            <Link to="/" onClick={dispatch(updateSearchedData({}))}>
              {" "}
              <button className="hover:bg-gray-100 w-full my-2">Home</button>
            </Link>
          </li>
          <li>
            <button className="hover:bg-gray-100 w-full my-2">Shorts</button>
          </li>
          <li>
            <button className="hover:bg-gray-100 w-full my-2">
              Subscriptions
            </button>
          </li>
        </ul>
        <ul className="border-b-2  font-bold">
          <li>
            <button className="hover:bg-gray-100 w-full my-2">Home</button>
          </li>
          <li>
            <button className="hover:bg-gray-100 w-full my-2">Shorts</button>
          </li>
          <li>
            <button className="hover:bg-gray-100 w-full my-2">
              Subscriptions
            </button>
          </li>
        </ul>
        <ul className="border-b-2  font-bold ">
          <li>
            <button className="hover:bg-gray-100 w-full my-4">
              Your Channel
            </button>
          </li>
          <li>
            <button className="hover:bg-gray-100 w-full my-2">History</button>
          </li>
          <li>
            <button className="hover:bg-gray-100 w-full my-2">Playlist</button>
          </li>
          <li>
            <button className="hover:bg-gray-100 w-full my-2">
              Watch Later
            </button>
          </li>
          <li>
            <button className="hover:bg-gray-100 w-full my-2">
              Liked Video
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
