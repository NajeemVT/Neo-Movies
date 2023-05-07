"use client";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useCallback, useEffect, useState } from "react";
import UpNextFeatured from "./UpNextFeatured";
import Link from "next/link";
import { MovieType } from "@/utils/contentfulClient";
import Loader from "./Loader";

let slideShowId: NodeJS.Timer;
const FeaturedMovies = () => {
  const [index, setIndex] = useState(0);
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_DOMAIN}/api/movies/search?tag=featured`
      );
      const movies = (await response.json()).map((p: any) => p.fields);
      setMovies(movies.slice(0, 3));
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

  return movies.length > 0 ? (
    <div className="flex w-full space-x-2">
      <div className="relative h-[25rem] w-full rounded-t-lg border-x-4 border-y-4 border-brand-primary shadow-2xl md:h-[30rem] md:w-3/4">
        <Image
          src={`https:${movies[index]?.posterImage.fields.file?.url}`}
          width={1000}
          height={1000}
          alt=""
          placeholder="blur"
          blurDataURL="/"
          className="aspect-square h-full w-full rounded-lg"
        />
        <div className="absolute bottom-1/2 z-30 w-full">
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
        <div className="absolute bottom-0 flex h-20 w-full items-center justify-end space-x-5 rounded-b-lg py-2 backdrop-blur-2xl backdrop-brightness-50 md:px-10 md:py-5">
          <h2 className="text-center text-xl font-bold text-brand-white md:text-right md:text-4xl">
            {movies[index]?.title}
          </h2>
          <Link href={`${process.env.HOST_DOMAIN}/movie/${movies[index]?.id}`}>
            <button className="rounded-full border-2 border-inherit bg-inherit  text-4xl font-bold text-white hover:border-amber-400 hover:text-brand-action">
              <AiOutlineRight />
            </button>
          </Link>
        </div>
      </div>
      <UpNextFeatured index={index} movies={movies} />
    </div>
  ) : (
    <div className="flex w-full items-center justify-center">
      <Loader />
    </div>
  );
};

export default FeaturedMovies;
