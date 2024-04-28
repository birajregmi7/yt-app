import React from "react";
import Comments from "./Comments";
const CommentsList = ({ data }) => {
  return (
    <div>
      {data &&
        data.map((x) => {
          return (
            <>
              <div className="border-black border-l-2 m-6 w-auto">
                <Comments data={x} />
                <div className="ml-20">
                  <CommentsList data={x.replies} />
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default CommentsList;
