import React from "react";

const VideoButtons = () => {
  let videoArray = [
    "JavaScript",
    "IPL",
    "Manchester United",
    "Premier Leauge",
    "IPL",
    "Manchester United",
    "Data Structure and Algorithm",
    "Premier Leauge",
    "Redux",
    "Data Structure and Algorithm",
  ];
  return (
    <>
    <div className="flex flex-wrap mt-1"> {videoArray.map((x, idx) => {
        return (
          <div key={idx} className="rounded-lg w-auto bg-gray-300 p-2 mx-4 my-1  ">
            {x}
          </div>
        );
      })}</div>
     
    </>
  );
};

export default VideoButtons;
