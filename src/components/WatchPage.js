import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoDetails from "./VideoDetails";
// import { useLocation } from "react-router-dom";
// import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const WatchPage = () => {
  // const url = window.location.href;
  // const trimmed = url.substring(url.indexOf("=") + 1);
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  //   const [videos, setVideos] = useState([]);
  // const getVideos = async () => {
  //   const data = await fetch(YOUTUBE_VIDEOS_API);
  //   const json = await data.json();
  //   setVideos(json.items);
  //   // console.log(json);
  // };
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="px-5 flex w-full">
          <div className="w-full">
            <iframe
              width="1000"
              height="500"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="ml-2 h-[500] w-full">
            <LiveChat />
          </div>
        </div>
        <div>
          {/* <h1>{searchParams.get("v")}</h1> */}
          <VideoDetails />
        </div>
        <div className="w-[1000px]">
          <CommentsContainer />
        </div>
      </div>
    </>
  );
};

export default WatchPage;
