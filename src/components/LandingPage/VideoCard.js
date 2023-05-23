import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <>
      <div className="p-2 m-4 w-72 my-1 rounded-lg h-full shadow-2xl hover:shadow-lg">
        <img
          className=" rounded-lg"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <ul>
          <li className="font-bold py-1">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </>
  );
};

export default VideoCard;
