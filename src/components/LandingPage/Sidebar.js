import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <>
      <div className="shadow-lg p-5 mr-8 ">
        {/* <h1 className="font-bold h-8 rounded-lg hover:bg-gray-200">Home</h1> */}
        <ul>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Subscription</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Music</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Sports</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Gaming</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Live</Link>
          </li>
        </ul>

        <ul className="pt-2">
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Subscription</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Music</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Sports</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Gaming</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Live</Link>
          </li>
        </ul>

        <ul className="pt-2">
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Subscription</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Music</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Sports</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Gaming</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Live</Link>
          </li>
        </ul>

        <ul className="pt-2">
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Subscription</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Music</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Sports</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Gaming</Link>
          </li>
          <li className="font-bold h-8 px-2 rounded-lg hover:bg-gray-200">
            <Link to="/">Live</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
