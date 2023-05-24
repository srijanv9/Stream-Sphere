import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import { cacheResults } from "../../utils/searchSlice";
// import SearchPage from "./SearchPage";
// import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.search);
  // const dispatch=useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("api call=>" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="grid grid-flow-col shadow-lg">
        <div className="flex p-3 col-span-1">
          <img
            onClick={() => toggleMenuHandler()}
            className="h-8 cursor-pointer"
            alt="ham"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          />
          <a href="/">
            <img
              className="h-8 pl-2"
              alt="ham"
              src="https://i.ibb.co/s9Qys2j/logo.png"
            />
          </a>
        </div>
        <div className="col-span-10 py-2">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            type="text"
            placeholder="Search..."
            onFocus={() => setSearchSuggestions(true)}
            onBlur={() => setSearchSuggestions(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-gray-200 px-5 rounded-r-full py-2 border border-gray-400">
            🔎
          </button>
          {searchSuggestions && (
            <div className="rounded-lg px-2 py-2 absolute bg-white border-0">
              <ul>
                {suggestions.map((s) => (
                  // <Link to={"/search_query=" + s}>
                  <li
                    key={s}
                    className="w-[34rem] px-1 py-2 hover:bg-stone-100"
                  >
                    🔎{s}
                  </li>
                  // </Link>
                ))}
                {/* <li className="w-[39rem] px-1 py-2 hover:bg-stone-100">
                  🔎I phone
                </li>
                <li className="w-[39rem] px-1 py-2 hover:bg-stone-100">
                  🔎I phone
                </li>
                <li className="w-[39rem] px-1 py-2 hover:bg-stone-100">
                  🔎I phone
                </li>
                <li className="w-[39rem] px-1 py-2 hover:bg-stone-100">
                  🔎I phone
                </li>
                <li className="w-[39rem] px-1 py-2 hover:bg-stone-100">
                  🔎I phone
                </li> */}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1 py-2">
          <img
            className="h-8 items-center"
            alt="profile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQtMu0O5J_hGBy4F-LCcffppZpw-PSrQ1xsTbpQDWCSfvqNxq_GxCHaGRnHVBeAxqYCA&usqp=CAU"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
