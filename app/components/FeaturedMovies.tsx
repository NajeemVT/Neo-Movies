"use client";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useCallback, useEffect, useState } from "react";
import UpNextFeatured from "./UpNextFeatured";
import { MovieType, fetchFeaturedMovies } from "@/utils/contentfulData";

let slideShowId: NodeJS.Timer;
const FeaturedMovies = () => {
  const [index, setIndex] = useState(0);
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetchFeaturedMovies();
      const movies = (await res?.map((p) => p.fields)) as MovieType[];
      setMovies(movies);
    }
    fetchMovies();
  }, [movies]);

  const incrementIndex = useCallback(() => {
    clearInterval(slideShowId);
    setIndex((prevIndex) => (prevIndex == 2 ? 0 : ++prevIndex));
    slideShowId = setInterval(() => incrementIndex(), 2000);
  }, []);
  const decrementIndex = () => {
    clearInterval(slideShowId);
    setIndex((prevIndex) => (prevIndex == 0 ? 2 : --prevIndex));
    slideShowId = setInterval(() => incrementIndex(), 4000);
  };

  useEffect(() => {
    slideShowId = setInterval(() => incrementIndex(), 4000);
  }, [incrementIndex]);

  return (
    <div className="flex w-full space-x-2">
      <div className="relative h-[25rem] w-full rounded-t-lg border-x-4 border-y-4 border-brand-primary shadow-2xl md:h-[30rem] md:w-3/4">
        <Image
          src={`https:${movies[index]?.posterImage.fields.file?.url}`}
          width={1000}
          height={1000}
          alt=""
          placeholder="blur"
          blurDataURL="/"
          unoptimized={true}
          className="aspect-square h-full w-full rounded-lg"
        />
        <div className="absolute bottom-1/2 z-50 w-full">
          <div className="mx-5 flex items-center justify-between text-brand-white">
            <button
              className="rounded-md border-2 border-inherit text-4xl font-bold backdrop-blur-lg hover:border-amber-400 hover:text-brand-action"
              onClick={decrementIndex}
            >
              <AiOutlineLeft />
            </button>
            <button
              className="rounded-md border-2 border-inherit text-4xl font-bold backdrop-blur-lg hover:border-amber-400 hover:text-brand-action"
              onClick={incrementIndex}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 flex h-10 w-full items-center justify-end space-x-5 rounded-b-lg py-2 backdrop-blur-2xl backdrop-brightness-50 md:h-20 md:px-10 md:py-5">
          <h2 className="text-center text-xl font-bold text-brand-white md:text-right md:text-4xl">
            {movies[index]?.title}
          </h2>
          <button className="rounded-full border-2 border-inherit bg-inherit  text-4xl font-bold text-white hover:border-amber-400 hover:text-brand-action">
            <AiOutlineRight />
          </button>
        </div>
      </div>
      <UpNextFeatured index={index} />
    </div>
  );
};

export default FeaturedMovies;
