import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import store from "../utils/appStore";
import { searchCache } from "../utils/searchSlice";
// import searchSuggestion from "../utils/searchSuggestions";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggestions, setShowSuggestions] = useState(false);
  // console.log(showsuggestions);
  const cache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const HandleClick = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    /// Debouncing
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSuggestions(cache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CALL - ", searchQuery);
    const res = await fetch(
      `https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=` +
        searchQuery
    );
    const str = await res.text();
    const arr = JSON.parse(
      str.substring(str.indexOf("["), str.indexOf("])") + 1)
    );
    let suggestionsTuple = [];

    if (Array.isArray(arr) && Array.isArray(arr.at(1))) {
      suggestionsTuple = arr.at(1);
    }

    const suggestions = suggestionsTuple
      .flatMap((suggestion) => suggestion)
      .filter((suggestion) => typeof suggestion === "string");

    // console.log("SUGG", suggestions);
    dispatch(searchCache({ [searchQuery]: suggestions }));
    setSuggestions(suggestions);
  };

  return (
    <div className="sticky z-50 top-0 grid grid-flow-col shadow-2xl">
      <div className="flex col-span-1">
        <img
          onClick={() => HandleClick()}
          className="h-12 p-2 m-2 cursor-pointer"
          alt="three line"
          src="https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-14.jpg"
        />

        <img
          className="h-16"
          alt="youtube"
          src="https://th.bing.com/th/id/OIP._IfEaUssjZQwZ1u92b1_GgHaEK?rs=1&pid=ImgDetMain"
        />
      </div>

      <div className="col-span-10 content-center">
        <div>
          <input
            className="w-1/2 p-2 rounded-full rounded-r-none mt-2"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="rounded-r-full bg-gray-400 p-2">🔍</button>
        </div>

        {showsuggestions && (
          <div className="bg-white fixed ml-60 w-[30rem] rounded-lg overscroll-y-contain">
            <ul className="text-left">
              {suggestions.map((s) => (
                <li key={s} className="py-2 mx-1 hover:bg-gray-200">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-12 p-2 m-2"
          alt="user-icon"
          src="https://th.bing.com/th/id/OIP._BXCcqxwmsduYNCJj2XDtgHaHa?rs=1&pid=ImgDetMain"
        />
      </div>
    </div>
  );
};

export default Header;
