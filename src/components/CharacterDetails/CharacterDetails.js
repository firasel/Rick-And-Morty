import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import React from "react";
import getCharacters from "../../api/getCharacters";
import episodeIcon from "../../assets/images/episode.svg";
import genderIcon from "../../assets/images/gender.svg";
import linkIcon from "../../assets/images/link.svg";
import loadingSpinner from "../../assets/images/loadingSpinner.gif";
import locationIcon from "../../assets/images/location.svg";
import originIcon from "../../assets/images/origin.svg";
import speciesIcon from "../../assets/images/species.svg";
import statusIcon from "../../assets/images/status.svg";
import "./CharacterDetails.scss";
import ListItem from "./ListItem";

const CharacterDetails = ({ id }) => {
  const { data, error, isError, isLoading } = useQuery(
    ["SingleCharacter", { type: "singleCharacter", id }],
    getCharacters
  );

  const { status, species, gender, image, name, origin, location, episode } =
    data || {};

  return (
    <div className="w-full h-full flex items-center pt-0 pb-7 md:py-20 container">
      {/* Error message */}
      {isError && (
        <div className="w-full min-h-[calc(100vh-25rem)] flex items-center justify-center">
          <h2 className="font-TTTravelsDemiBold text-red-500 text-3xl text-center">
            {error?.response?.data?.error || "Something went wrong"}
          </h2>
        </div>
      )}
      {/* Loading card */}
      {isLoading && (
        <img
          className="h-10 md:h-20 w-10 md:w-20 bg-transparent mx-auto mt-[10%]"
          src={loadingSpinner}
          alt=""
        />
      )}

      {!isLoading && !isError && (
        <div className="w-full grid md:grid-cols-2 gap-4 md:gap-0 items-center justify-center relative">
          <div className="max-w-2xl px-8 flex items-center justify-center gap-2 relative">
            {/* Name Water Mark start */}
            <div className="hidden md:flex w-[20%] absolute -left-16 xl:-left-5 2xl:left-5 -rotate-90 items-center justify-center">
              <h2 className="titleStyle font-TTTravelsExtraBold text-8xl leading-none whitespace-nowrap absolute">
                {name}
              </h2>
            </div>
            {/* Name Water Mark end */}
            {/* Name and Image Start */}
            <div className="w-fit">
              <h2 className="font-TTTravelsDemiBold text-[24px] md:text-[38px] 2xl:text-5xl text-center text-customBlue mb-5 md:mb-8">
                {name}
              </h2>
              <div className="w-3/4 md:w-fit mx-auto bg-gradient-to-br from-customBlue/70 to-customGreen/70 p-[1px] rounded-lg">
                <div className="p-[30px] md:p-[50px] bg-customBlack rounded-lg flex items-center">
                  <img
                    className="aspect-square rounded-lg"
                    src={image}
                    alt="character"
                  />
                  {/* Middle line start */}
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{
                      scaleY: 1,
                      opacity: 1,
                      transition: { delay: 0.1, duration: 1.5 },
                    }}
                    className="hidden md:block w-[1px] h-2/3 bg-gradient-to-br from-customBlue/70 to-customGreen/70 p-[1px] absolute right-0"
                  ></motion.div>
                  {/* Middle line end */}
                </div>
              </div>
            </div>
            {/* Name and Image end */}
          </div>
          <div className="w-full px-2 md:px-8 space-y-4 md:space-y-6 xl:space-y-8 2xl:space-y-10 overflow-hidden">
            <div className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 items-center justify-between gap-4 md:gap-6 xl:gap-8 2xl:gap-10 overflow-hidden">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.1 },
                }}
                className="bg-gradient-to-br from-customBlue/70 to-customGreen/70 p-[1px] rounded-lg overflow-hidden"
              >
                <div className="w-auto text-white bg-customBlack rounded-lg px-2 py-2 md:px-6 md:py-4 overflow-x-auto">
                  <img
                    className="w-5 md:w-8 xl:w-10 aspect-square mb-1"
                    src={statusIcon}
                    alt="icon"
                  />
                  <span className="font-TTTravelsRegular text-sm md:text-xl">
                    Status
                  </span>
                  <br />
                  <span className="font-TTTravelsDemiBold text-[20px] md:text-[30px] 2xl:text-[40px] leading-none">
                    {status}
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.2 },
                }}
                className="bg-gradient-to-br from-customBlue/70 to-customGreen/70 p-[1px] rounded-lg overflow-hidden"
              >
                <div className="w-auto text-white bg-customBlack rounded-lg px-2 py-2 md:px-6 md:py-4 overflow-x-auto">
                  <img
                    className="w-5 md:w-8 xl:w-10 aspect-square mb-1"
                    src={speciesIcon}
                    alt="icon"
                  />
                  <span className="font-TTTravelsRegular text-sm md:text-xl">
                    Species
                  </span>
                  <br />
                  <span className="font-TTTravelsDemiBold text-[20px] md:text-[30px] 2xl:text-[40px] leading-none">
                    {species}
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.3 },
                }}
                className="col-auto md:col-span-2 xl:col-auto bg-gradient-to-br from-customBlue/70 to-customGreen/70 p-[1px] rounded-lg overflow-hidden"
              >
                <div className="w-auto text-white bg-customBlack rounded-lg px-2 py-2 md:px-6 md:py-4 overflow-x-auto">
                  <img
                    className="w-5 md:w-8 xl:w-10 aspect-square mb-1"
                    src={genderIcon}
                    alt="icon"
                  />
                  <span className="font-TTTravelsRegular text-sm md:text-xl">
                    Gender
                  </span>
                  <br />
                  <span className="font-TTTravelsDemiBold text-[20px] md:text-[30px] 2xl:text-[40px] leading-none">
                    {gender}
                  </span>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.1 },
              }}
              className="bg-gradient-to-br from-customBlue/70 to-customGreen/70 p-[1px] rounded-lg overflow-hidden"
            >
              <div className="w-auto text-white bg-customBlack rounded-lg px-2 py-2 md:px-6 md:py-4 overflow-x-auto">
                <img
                  className="w-5 md:w-8 xl:w-10 aspect-square mb-1"
                  src={originIcon}
                  alt="icon"
                />
                <span className="font-TTTravelsRegular text-sm md:text-xl">
                  Origin
                </span>
                <br />
                <div className="flex items-center justify-between">
                  <span className="font-TTTravelsDemiBold text-[20px] md:text-[30px] 2xl:text-[40px] leading-none">
                    {origin?.name}
                  </span>
                  <button>
                    <img className="w-6" src={linkIcon} alt="icon" />
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.2 },
              }}
              className="bg-gradient-to-br from-customBlue/70 to-customGreen/70 p-[1px] rounded-lg overflow-hidden"
            >
              <div className="w-auto text-white bg-customBlack rounded-lg px-2 py-2 md:px-6 md:py-4 overflow-x-auto">
                <img
                  className="w-5 md:w-8 xl:w-10 aspect-square mb-1"
                  src={locationIcon}
                  alt="icon"
                />
                <span className="font-TTTravelsRegular text-sm md:text-xl">
                  Last Known Location
                </span>
                <br />
                <div className="flex items-center justify-between">
                  <span className="font-TTTravelsDemiBold text-[20px] md:text-[30px] 2xl:text-[40px] leading-none">
                    {location?.name}
                  </span>
                  <button>
                    <img className="w-6" src={linkIcon} alt="icon" />
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
              className="bg-gradient-to-br from-customBlue/70 to-customGreen/70 p-[1px] rounded-lg overflow-hidden"
            >
              <div className="w-auto text-white bg-customBlack rounded-lg px-2 py-2 md:px-6 md:py-4 overflow-x-auto">
                <img
                  className="w-5 md:w-8 xl:w-10 aspect-square mb-1"
                  src={episodeIcon}
                  alt="icon"
                />
                <span className="font-TTTravelsRegular text-sm md:text-xl">
                  Episode(S)
                </span>
                <ul className="font-TTTravelsDemiBold text-[20px] md:text-[30px] 2xl:text-[40px] leading-none">
                  {episode?.slice(0, 5)?.map((url, index) => (
                    <ListItem key={index} url={url} />
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
