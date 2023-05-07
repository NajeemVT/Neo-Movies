import Image from "next/image";
import { useEffect, useState } from "react";
import { MovieType } from "@/utils/contentfulClient";
import { AiFillStar, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";

const UpNextFeatured = ({
  index,
  movies,
}: {
  index: number;
  movies: MovieType[];
}) => {
  const [imageIndexes, setImageIndexes] = useState<number[]>([]);

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
            className="aspect-square  rounded-lg"
          />
          <div className=" flex flex-col justify-center space-y-2 text-brand-white">
            <h3 className="truncate text-lg font-semibold ">
              {movies[imgIndex]?.title}
            </h3>
            <p className="flex items-center space-x-2 text-xl">
              <AiFillStar className="text-brand-action" />
              <span>{movies[imgIndex]?.imdbRating}/10</span>
            </p>
            <Link
              href={`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/movie/${movies[imgIndex]?.id}`}
            >
              <button className="ml-5 rounded-full border-2 border-inherit bg-inherit align-middle text-4xl font-bold text-white hover:border-amber-400 hover:text-brand-action">
                <AiOutlineRight />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpNextFeatured;
