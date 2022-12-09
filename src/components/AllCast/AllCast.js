import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import getCharacters from "../../api/getCharacters";
import arrow from "../../assets/images/arrow.svg";
import arrowColored from "../../assets/images/arrowColored.svg";
import selectArrow from "../../assets/images/selectArrow.png";
import Character from "../Character/Character";
import "./AllCast.scss";

const AllCast = () => {
  const options = ["Characters", "Location", "Episodes"];

  const [page, setPage] = useState(1);
  const [select, setSelect] = useState(options[0]);
  const [selectShow, setSelectShow] = useState(false);

  const { data, error, isError, isLoading } = useQuery(
    ["AllCharacters", page],
    getCharacters
  );
  console.log(data);

  return (
    <div className="container">
      <div className="flex items-end justify-between">
        <h2 className="font-TTTravelsDemiBold text-6xl text-customBlue">
          The Cast
        </h2>
        <div className="flex items-center searchBox relative">
          <div onClick={()=>setSelectShow(prevVal=>!prevVal)} className="rounded-l-full font-TTTravelsDemiBold text-base bg-customBlue text-white px-3 py-2 selectDiv cursor-pointer">
            {select}
            <img className={`${!selectShow && "rotate-180"}`} src={selectArrow} alt="arrow" />
          </div>

          {selectShow && (
            <div className="bg-customBlue font-TTTravelsDemiBold text-base text-white absolute top-[100%] z-10 rounded-lg overflow-hidden mt-2">
              {options?.map((name, i) => (
                <div
                  onClick={() => setSelect(name)}
                  className="px-5 cursor-pointer hover:bg-customBlack/10"
                >
                  {i > 0 && <hr />}
                  <p key={i} className="py-2 text-center optionBorder">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          )}

          <input
            className="max-w-xs pl-12 pr-3 py-2 text-TTTravelsDemiBold text-xl bg-white/5 text-white rounded-r-full outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 py-10">
        {data?.results?.map((characterData, i) => (
          <Character key={i} characterData={characterData} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 text-white pb-10 font-Poppins font-medium text-xl">
        <span>Page</span>
        <button
          onClick={() => setPage((prevVal) => prevVal - 1)}
          disabled={!data?.info?.prev}
        >
          <img
            className="w-5 rotate-180"
            src={data?.info?.prev ? arrowColored : arrow}
            alt="arrow"
          />
        </button>
        <span className="w-auto px-7 py-1 rounded-full border-inherit  bg-gradient-to-br from-customBlue/70 to-customGreen/70 text-customBlue relative flex justify-center items-center">
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
            className="w-5"
            src={data?.info?.next ? arrowColored : arrow}
            alt="arrow"
          />
        </button>
        <span>of {data?.info?.pages}</span>
      </div>
    </div>
  );
};

export default AllCast;
