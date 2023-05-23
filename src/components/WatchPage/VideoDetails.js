import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VIDEO_STATS } from "../../utils/constants";
const VideoDetails = () => {
  const [searchParams] = useSearchParams();
  const url = searchParams.get("v");
  const api =
    VIDEO_STATS + url + "&key=AIzaSyBH06OJtMWkc71z8Y0ipVz5yCNmCgaVksU";

  const [channelname, setchannelname] = useState("");
  const [videoname, setvideoname] = useState("");
  const [descripton, setdescription] = useState("");

  const fetchApiData = async (api) => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      var channelNaam = data.items[0].snippet.channelTitle;
      setchannelname(channelNaam);
      var videoNaam = data.items[0].snippet.title;
      setvideoname(videoNaam);
      var descripton = data.items[0].snippet.description;
      setdescription(descripton);
      //   console.log(descripton);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(api);
  }, []);

  return (
    <>
      <div className="flex flex-col flex-wrap w-[1000px]">
        <div className="px-5 mb-2 font-bold text-2xl">{videoname}</div>
        <div className="flex flex-row">
          <img
            className="h-10 items-center px-5 mt-2"
            alt="channel"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQtMu0O5J_hGBy4F-LCcffppZpw-PSrQ1xsTbpQDWCSfvqNxq_GxCHaGRnHVBeAxqYCA&usqp=CAU"
          />
          <div className="font-bold text-xl items-center py-2">
            {channelname}
          </div>
          <button className="rounded-3xl hover:bg-black hover:text-white w-20 border border-black ml-5">
            Join
          </button>
          <button className="rounded-3xl hover:bg-black hover:text-white w-28 border border-black ml-1">
            Subscribe
          </button>
          <button className="rounded-l-3xl hover:bg-black hover:text-white w-20 border border-black ml-20">
            Like
          </button>
          <button className="rounded-r-3xl hover:bg-black hover:text-white w-20 border border-black">
            Dislike
          </button>
          <button className="rounded-3xl hover:bg-black hover:text-white w-28 border border-black ml-1">
            {/* <img
              className="h-5"
              alt="share"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdYI_u-2A6ey2fvHOgrycTUKFcf9EiNgdmg&usqp=CAU"
            /> */}
            Share
          </button>
          <button className="rounded-3xl hover:bg-black hover:text-white w-28 border border-black ml-1">
            Thanks
          </button>
        </div>
        <div className="bg-slate-200 h-full rounded-lg ml-5 mt-2">
          <div>{descripton}</div>
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
