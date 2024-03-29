import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useRef, useState } from "react";
import getCharacters from "../../api/getCharacters";
import getEpisodes from "../../api/getEpisodes";
import getLocations from "../../api/getLocations";
import arrow from "../../assets/images/arrow.svg";
import arrowColored from "../../assets/images/arrowColored.svg";
import searchImg from "../../assets/images/search.png";
import selectArrow from "../../assets/images/selectArrow.png";
import Character from "../Character/Character";
import Episode from "../Episode/Episode";
import CharacterSkeleton from "../LoadingUi/CharacterSkeleton";
import EpisodeLocationSkeleton from "../LoadingUi/EpisodeLocationSkeleton";
import Location from "../Location/Location";
import "./AllCast.scss";

const AllCast = () => {
  const options = ["Characters", "Location", "Episodes"];
  // States
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState(options[0]);
  const [selectShow, setSelectShow] = useState(false);
  const [searchText, setSearchText] = useState("");

  const searchInputRef = useRef();

  const { data, error, isError, isLoading } = useQuery(
    ["AllCharacters", { type: "filter", page, searchText }, select],
    select === options[0]
      ? getCharacters
      : select === options[1]
      ? getLocations
      : getEpisodes
  );

  // Debounce function
  const debounceFunction = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const searchHandler = (val) => {
    setPage(1);
    setSearchText(val);
  };
  // Debounce handler
  const debounceHandler = useCallback(debounceFunction(searchHandler, 250), [
    searchHandler,
  ]);

  // Select handler function
  const selectHandler = (val) => {
    setSearchText("");
    setPage(1);
    setSelect(val);
    if (
      searchInputRef &&
      searchInputRef?.current &&
      searchInputRef?.current?.value
    ) {
      searchInputRef.current.value = "";
    }
    setSelectShow(false);
  };

  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <h2 className="font-TTTravelsDemiBold text-lg md:text-5xl xl:text-6xl text-customBlue whitespace-nowrap">
          The Cast
        </h2>
        <div className="w-3/5 md:w-1/2 flex items-center justify-end relative">
          <div className="flex items-center searchBox relative">
            <div
              onClick={() => setSelectShow((prevVal) => !prevVal)}
              className="h-full rounded-l-full font-TTTravelsDemiBold text-xs md:text-base bg-customBlue text-white px-4 py-2 selectDiv cursor-pointer flex items-center gap-1 md:gap-2 border-[3px] border-customBlue select-none"
            >
              {select}
              <img
                className={`${!selectShow && "rotate-180"}`}
                src={selectArrow}
                alt="arrow"
              />
            </div>
            <AnimatePresence>
              {selectShow && (
                <motion.div
                  initial={{ scaleY: 0, originY: 0, opacity: 0 }}
                  animate={{
                    scaleY: 1,
                    originY: 0,
                    opacity: 1,
                    transition: { delay: 0.1 },
                  }}
                  exit={{ scaleY: 0, originY: 0, opacity: 0 }}
                  className="bg-customBlue font-TTTravelsDemiBold text-xs md:text-base text-white absolute top-[100%] z-10 rounded-lg overflow-hidden mt-2"
                >
                  {options?.map((name, i) => (
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: { delay: (i*0.1)+0.2 },
                      }}
                      key={i}
                      onClick={() => selectHandler(name)}
                      className="px-5 cursor-pointer hover:bg-customBlack/10"
                    >
                      {i > 0 && <hr />}
                      <p
                        key={i}
                        className="py-2 text-center optionBorder select-none"
                      >
                        {name}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="inputBox rounded-r-full">
              <button className="pl-2 pr-1 py-[10px] md:py-3 bg-white/5">
                <img src={searchImg} alt="icon" />
              </button>
              <input
                className="w-full xl:max-w-xs px-1 py-[6px] md:py-2 text-TTTravelsDemiBold text-base md:text-xl bg-white/5 text-white rounded-r-full outline-none"
                type="text"
                placeholder="Search"
                ref={searchInputRef}
                onChange={(e) => debounceHandler(e?.target?.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {isError && (
        <div className="min-h-[calc(100vh-25rem)] flex items-center justify-center">
          <h2 className="font-TTTravelsDemiBold text-red-500 text-3xl text-center">
            {error?.response?.data?.error || "Something went wrong"}
          </h2>
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-9 xl:gap-10 py-10">
        {/* Loading card */}
        {isLoading &&
          Array(10)
            .fill(0)
            .map((_, i) => {
              if (select === options[0]) {
                return <CharacterSkeleton key={i} />;
              }
              return <EpisodeLocationSkeleton key={i} />;
            })}
        {/* Cast card */}
        {!isLoading &&
          !isError &&
          data?.results?.map((cardData, i) => {
            if (select === options[0]) {
              return (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: (i % 5) * 0.1 },
                  }}
                >
                  <Character characterData={cardData} />
                </motion.div>
              );
            }
            if (select === options[1]) {
              return (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: (i % 5) * 0.1 },
                  }}
                >
                  <Location key={i} locationData={cardData} />
                </motion.div>
              );
            }
            return (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: (i % 5) * 0.1 },
                }}
              >
                <Episode key={i} episodeData={cardData} />
              </motion.div>
            );
          })}
      </div>

      {/* Pagination start */}
      <div className="flex items-center justify-center gap-3 text-white pb-6 md:pb-10 font-Poppins font-medium text-xs md:text-xl">
        <span>Page</span>
        <button
          onClick={() => setPage((prevVal) => prevVal - 1)}
          disabled={!data?.info?.prev}
        >
          <img
            className="w-3 md:w-5 rotate-180"
            src={data?.info?.prev ? arrowColored : arrow}
            alt="arrow"
          />
        </button>
        <span className="w-auto px-5 md:px-7 py-[3px] md:py-1 rounded-full border-inherit  bg-gradient-to-br from-customBlue/70 to-customGreen/70 text-customBlue relative flex justify-center items-center">
          <span className="relative z-10">{page}</span>
          <span className="w-full h-full rounded-full absolute bg-customBlack scale-95 z-0">
            <span className="w-full h-full rounded-full absolute bg-white/5"></span>
          </span>
        </span>
        <button
          onClick={() => setPage((prevVal) => prevVal + 1)}
          disabled={!data?.info?.next}
        >
          <img
            className="w-3 md:w-5"
            src={data?.info?.next ? arrowColored : arrow}
            alt="arrow"
          />
        </button>
        <span>of {data?.info?.pages}</span>
      </div>
      {/* Pagination end */}
    </div>
  );
};

export default AllCast;
