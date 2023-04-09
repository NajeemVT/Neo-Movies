import Image from "next/image";
import movies from "../assets";
import { useEffect, useState } from "react";

const UpNextFeatured = ({ index }: { index: number }) => {
  const [imageIndexes, setImageIndexes] = useState<number[]>([]);

  useEffect(() => {
    let firstIndex = index;
    let secondIndex = firstIndex == 2 ? 0 : firstIndex + 1;
    let thirdIndex = secondIndex == 2 ? 0 : secondIndex + 1;

    const updatedIndexes = [secondIndex, thirdIndex, firstIndex];
    setImageIndexes(updatedIndexes);
  }, [index, imageIndexes]);

  return (
    <div className="hidden h-[30rem] w-1/4 flex-col space-y-3 px-1 shadow-2xl md:flex">
      <h3 className="text-2xl font-bold text-amber-400">Up Next</h3>
      {imageIndexes.map((imgIndex) => (
        <div
          key={imgIndex}
          className="flex space-x-2 rounded-lg bg-brand-black p-1 px-2 shadow-2xl"
        >
          <Image
            src={movies[imgIndex].poster}
            width={120}
            height={120}
            alt=""
            className="aspect-square h-fit w-fit rounded-lg"
          />
          <h3 className="text-lg font-semibold text-brand-white">
            {movies[imgIndex].title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default UpNextFeatured;
