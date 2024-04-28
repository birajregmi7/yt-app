import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import "../src/App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleVideo from "./components/SingleVideo";
import MainContainer from "./components/MainContainer";
import LiveChatContainer from "./components/LiveChatContainer";

const appBrowser = createBrowserRouter([
  {
    element: <Body />,
    path: "/",
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/Watch",
        element: <SingleVideo />,
      },
      // {
      //   path:'/livecomment',
      //   element:<LiveChatContainer/>
      // }
    ],
  },
]);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appBrowser}></RouterProvider>
      </Provider>
    </>
  );
};

export default App;
