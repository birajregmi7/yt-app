import React, { useEffect, useState } from "react";
import { Youtube_Api, Api_Key } from "../constant";
import axios from "axios";
import CardVideo from "./CardVideo";
import CommentsContainer from "./CommentsContainer";
import { useDispatch, useSelector } from "react-redux";
import SearchedVideoCard from "./SearchedVideoCard";
import VideoButtons from "./VideoButtons";
import { updateSearchedData } from "../utils/searchDataSlice";
// import axios from "axios";
const VideoContainer = () => {
  const dispatch = useDispatch();
  // dispatch(updateSearchedData({}));
  const selector = useSelector(
    (store) => store.searchData.searched_data_api.items
  );

  console.log(selector);
  const [youtubeData, setYoutubeData] = useState();
  const fetchYoutubeData = async () => {
    try {
      const response = await axios.get(Youtube_Api + Api_Key);
      console.log(response);
      setYoutubeData(response.data.items);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchYoutubeData();
  }, []);
  {
    if (!youtubeData) return null;
  }
  return (
    <>
      <VideoButtons />
      {selector ? (
        <SearchedVideoCard data={selector} />
      ) : (
        <CardVideo details={youtubeData} />
      )}
    </>
  );
};

export default VideoContainer;
