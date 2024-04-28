import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleVideoPage } from "../utils/toggleSlice";
const CardVideo = (youtubeData) => {
  const dispatch = useDispatch();
  const videoPageToggle = () => {
    console.log('Going to dispatch 2')
    dispatch(toggleVideoPage());
  };
  return (
    <div className="flex flex-wrap">
      {youtubeData.details.map((x) => {
        return (
          <>
            <Link onClick={() => videoPageToggle()} to={"/watch?v=" + x.id}>
              <div className="flex flex-col w-72 m-3">
                <img
                  className="rounded-xl"
                  src={x?.snippet?.thumbnails?.medium.url}
                  alt=""
                />
                <div className="font-medium">{x?.snippet?.title}</div>
                <div>{x?.snippet?.channelTitle}</div>
                <div>{x?.statistics?.viewCount.split().map((x)=> {
                  if(x.length<=6){
                    return `${x[0]}${x[1]}K`
                  }else if(x.length==7){
                    return  `${x[0]}${x[1]}M`
                  }
                })}</div>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default CardVideo;
