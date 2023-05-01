import Image from "next/image";
import { useEffect, useState } from "react";
import { MovieType, fetchFeaturedMovies } from "@/utils/contentfulData";
import { AiOutlineRight } from "react-icons/ai";

const UpNextFeatured = ({ index }: { index: number }) => {
  const [imageIndexes, setImageIndexes] = useState<number[]>([]);
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetchFeaturedMovies();
      const movies = (await res?.map((p) => p.fields)) as MovieType[];
      setMovies(movies);
    }
    fetchMovies();
  }, [movies]);

  useEffect(() => {
    let firstIndex = index;
    let secondIndex = firstIndex == 2 ? 0 : firstIndex + 1;
    let thirdIndex = secondIndex == 2 ? 0 : secondIndex + 1;

    const updatedIndexes = [secondIndex, thirdIndex, firstIndex];
    setImageIndexes(updatedIndexes);
  }, [index]);

  return (
    <div className="hidden w-1/4 flex-grow flex-col space-y-3 px-1 md:flex">
      <h3 className="text-2xl font-bold text-brand-action">Up Next</h3>
      {imageIndexes.map((imgIndex) => (
        <div
          key={imgIndex}
          className="flex space-x-2 rounded-lg bg-brand-secondary p-2 shadow-2xl"
        >
          <Image
            src={`https:${movies[imgIndex]?.posterImage.fields.file?.url}`}
            width={120}
            height={120}
            alt=""
            placeholder="blur"
            blurDataURL="/"
            unoptimized={true}
            className="aspect-square  rounded-lg"
          />
          <div className="space-y-5">
            <h3 className="truncate text-lg font-semibold text-brand-white">
              {movies[imgIndex]?.title}
            </h3>
            <button className="mx-5 rounded-full border-2 border-inherit bg-inherit  text-4xl font-bold text-brand-white hover:border-amber-400 hover:text-brand-action">
              <AiOutlineRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpNextFeatured;
