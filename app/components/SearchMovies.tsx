"use client";
import Image from "next/image";
import { MovieType } from "@/utils/contentfulClient";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SearchMovies = () => {
  const [searchText, setSearchText] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchMoviesList(searchText: string) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_DOMAIN}/api/movies/search/${searchText}`
      );
      const movies = (await response.json()).map((p: any) => p.fields);
      setMovies(movies);
    }

    fetchMoviesList(searchText);
  }, [searchText]);

  return (
    <div>
      <div onBlur={() => setShowSearchResults(false)}>
        <input
          type="text"
          className="w-60 rounded-md bg-brand-white py-2 pl-3 pr-4 text-sm font-semibold text-brand-black outline-none md:w-96"
          placeholder="Search a movie name"
          spellCheck="false"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowSearchResults(true)}
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-brand-primary hover:cursor-pointer">
          <FaSearch />
        </span>
      </div>
      <div
        className={`${
          showSearchResults ? `block` : `hidden`
        } absolute z-50 my-2 h-96 w-full  rounded-md bg-brand-primary`}
      >
        {movies.map((movie: MovieType) => (
          <div
            key={movie.id}
            className="flex h-1/5 w-full space-x-2 border-b p-2 hover:cursor-pointer hover:bg-brand-secondary md:space-x-5"
            onMouseDown={() => router.push(`/movie/${movie.id}`)}
          >
            <Image
              src={`https:${movie.posterImage.fields.file?.url}`}
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="/"
              unoptimized={true}
              alt=""
              className="aspect-square h-full w-1/4"
            />
            <div className="h-full w-3/4 text-brand-white">
              <h1 className="truncate font-semibold md:text-lg">
                {movie.title}
              </h1>
              <p className="w-10/12 text-xs">
                Stars: {movie.cast.slice(0, 2).join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;
