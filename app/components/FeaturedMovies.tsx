"use client";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import movies from "../assets";
import { useEffect, useState } from "react";
import UpNextFeatured from "./UpNextFeatured";

let slideShowId: NodeJS.Timer;
const FeaturedMovies = () => {
  const [index, setIndex] = useState(0);

  const incrementIndex = () => {
    clearInterval(slideShowId);
    setIndex((prevIndex) => (prevIndex == 2 ? 0 : ++prevIndex));
    slideShowId = setInterval(() => incrementIndex(), 2000);
  };
  const decrementIndex = () => {
    clearInterval(slideShowId);
    setIndex((prevIndex) => (prevIndex == 0 ? 2 : --prevIndex));
    slideShowId = setInterval(() => incrementIndex(), 4000);
  };

  useEffect(() => {
    slideShowId = setInterval(() => incrementIndex(), 4000);
  }, []);

  return (
    <div className="flex w-full space-x-2">
      <div className="relative h-[25rem] w-full rounded-t-lg border-x-4 border-y-4 border-brand-primary shadow-2xl md:h-[30rem] md:w-3/4">
        <Image
          src={movies[index].poster}
          width={1000}
          height={1000}
          alt=""
          className="aspect-square h-full w-full rounded-lg"
        />
        <div className="absolute bottom-1/2 z-50 w-full">
          <div className="mx-5 flex items-center justify-between text-brand-white">
            <button
              className="rounded-md border-2 border-inherit text-4xl font-bold backdrop-blur-lg"
              onClick={decrementIndex}
            >
              <AiOutlineLeft />
            </button>
            <button
              className="rounded-md border-2 border-inherit text-4xl font-bold backdrop-blur-lg"
              onClick={incrementIndex}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 h-10 w-full items-center justify-between rounded-b-lg py-2 backdrop-blur-2xl backdrop-brightness-50 md:h-20 md:px-10 md:py-5">
          <h2 className="text-center text-xl font-bold text-brand-white md:text-right md:text-4xl">
            {movies[index].title}
          </h2>
        </div>
      </div>
      <UpNextFeatured index={index} />
    </div>
  );
};

export default FeaturedMovies;
