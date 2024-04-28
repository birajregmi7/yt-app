import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addComment, addMessages } from "../utils/liveStreamSlice";
import LiveChat from "./LiveChat";
import { liveNames, liveTexts } from "../helper";
const LiveChatContainer = () => {
  const dispatch = useDispatch();
  const liveStreamData = useSelector((store) => store.live.messages);
  const [counter, setCounter] = useState(0);
  const [comment, setComment] = useState();
  console.log(liveStreamData);
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(counter + 1);
      dispatch(
        addMessages({
          name: liveNames(),
          text: liveTexts(40),
        })
      );
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(
      addComment({
        name: "Biraj",
        text: comment,
      })
    );
    setComment("");
  };
  return (
    <>
      <div className="w-full">
        <div className="mt-1 h-[550px] flex flex-col-reverse w-full shadow-lg overflow-y-auto border border-black  ">
          {liveStreamData.map((x) => {
            {
              console.log("datafromlivecont", x);
            }
            return (
              <>
                <div className="">
                  <LiveChat data={x} />
                </div>
              </>
            );
          })}
        </div>
        <p className="mt-2">Add comments</p>
        <div className="w-full  ">
          <form action="" onSubmit={handleAddComment} className="flex">
            <input
              placeholder="Add your comments"
              className="w-full bg-slate-100 h-10"
              type="text"
              onChange={(e) => {
                setComment(e.target.value);
              }}
              value={comment}
            />
            <button className="w-14">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LiveChatContainer;
