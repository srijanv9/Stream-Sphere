console.log("this is my api-->", process.env.REACT_APP_GOOGLE_API_KEY);

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_STATS =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=";
export const LIVE_CHAT_COUNT = 25;
