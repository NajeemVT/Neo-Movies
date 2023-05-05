import React from "react";
import Image from "next/image";
import { MovieType } from "@/utils/contentfulClient";
import Error from "../components/Error";

async function fetchMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_DOMAIN}/api/movies/search?tag=fan-favorite`
  );
  const movies = (await response.json()).map((p: any) => p.fields);
  return movies;
}

const FanFavorites = async () => {
  const movies = (await fetchMovies()) as MovieType[];
  if (movies.length === 0) return <Error />;
  return (
    <div className="m-1 flex flex-col space-y-2 p-5 md:space-y-5">
      <div className="flex h-10 items-center space-x-2 font-bold text-brand-white">
        <div className="h-full w-1 bg-brand-action"></div>
        <h1 className="text-3xl">Fan Favorites</h1>
      </div>
      <div className="grid grid-cols-5">
        {movies.map((movie: MovieType) => (
          <div
            key={movie.id}
            className="flex h-full w-60 flex-col space-y-3 rounded-lg bg-brand-secondary p-1 shadow-2xl md:p-2"
          >
            <Image
              src={`https:${movie.posterImage.fields.file?.url}`}
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="/"
              unoptimized={true}
              alt=""
              className="aspect-square h-2/3 w-full"
            />
            <h1 className="truncate text-xl font-semibold text-brand-white">
              {movie.title}
            </h1>
            <button className="w-full bg-brand-action p-2 text-brand-white">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FanFavorites;
