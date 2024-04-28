import React from "react";

const SearchResults = ({ data }) => {
  return (
    <div className="content-container">
      <SearchedVideoCard data={data} />
    </div>
  );
};

const SearchedVideoCard = ({ data }) => {
  console.log("searchedData props", data);
  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        {data.map((video) => (
          <div
            key={video.id.videoId}
            className="bg-white rounded-lg shadow-md flex p-4"
          >
            <div className="w-64 h-48 relative flex-shrink-0">
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="z-50 absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 pl-6 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-2">
                {video.snippet.title}
              </h3>
              <p className="text-gray-600 line-clamp-3 mb-4">
                {video.snippet.description}
              </p>
              {/* Add other video details here */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResults;
