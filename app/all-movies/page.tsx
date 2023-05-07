import React from "react";
import Image from "next/image";
import Error from "../components/Error";
import { MovieType } from "@/utils/contentfulClient";
import Link from "next/link";

async function fetchMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_DOMAIN}/api/movies`
  );
  const movies = (await response.json()).map((p: any) => p.fields);
  return movies;
}

const AllMovies = async () => {
  const movies = ((await fetchMovies()) as MovieType[]) || [];
  if (movies.length === 0) return <Error />;
  return (
    <div className="m-1 flex flex-col space-y-5 p-5">
      <div className="flex h-10 items-center space-x-2 font-bold text-brand-white">
        <div className="h-full w-1 bg-brand-action"></div>
        <h1 className="text-3xl">All Movies</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {movies &&
          movies.map((movie: MovieType) => (
            <div
              key={movie.id}
              className="flex h-full w-full flex-col space-y-3 rounded-lg bg-brand-secondary p-1 shadow-2xl md:p-2"
            >
              <Image
                src={`https:${movie.posterImage.fields.file?.url}`}
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL="/"
                alt=""
                className="aspect-square h-2/3 w-full"
              />
              <h1 className="truncate text-xl font-semibold text-brand-white">
                {movie.title}
              </h1>
              <Link
                href={`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/movie/${movie.id}`}
              >
                <button className="w-full bg-brand-action p-2 text-brand-white">
                  Explore
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllMovies;
