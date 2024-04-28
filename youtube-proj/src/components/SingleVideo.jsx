import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChatContainer from "./LiveChatContainer";

const SingleVideo = () => {
  const [searchParams] = useSearchParams();
  const paramData = searchParams.get("v");
  return (
    <div className="flex ">
      <div className="w-full mx-4">
        <div className="w-full">
          <iframe
            width="900"
            height="550"
            src={"https://www.youtube.com/embed/" + paramData}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text-2xl font-bold m-6">Comments</div>
        <CommentsContainer />
      </div>
      <LiveChatContainer />
    </div>
  );
};

export default SingleVideo;
