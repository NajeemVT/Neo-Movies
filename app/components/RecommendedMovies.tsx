"use client";
import Image from "next/image";
import { MovieType } from "@/utils/contentfulClient";
import Link from "next/link";
import { useEffect, useState } from "react";

const RecommendedMovies = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_DOMAIN}/api/movies/search?tag=recommended`
      );
      const movies = (await response.json()).map((p: any) => p.fields);
      setMovies(movies);
    }
    fetchMovies();
  }, [movies]);

  return (
    <div className="flex flex-col space-y-5 md:px-2">
      <div className="flex h-10 items-center space-x-2 font-bold text-brand-white">
        <div className="h-full w-1 bg-brand-action"></div>
        <h1 className="text-2xl md:text-3xl">Recommended Movies</h1>
      </div>

      {movies.length > 0 && (
        <div className="flex h-full w-full flex-col justify-between space-y-5 md:h-80 md:flex-row md:-space-y-0">
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
      )}
    </div>
  );
};

export default RecommendedMovies;
