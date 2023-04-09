import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import movieImg from "../assets/kgf.jpg";

export const TopTenMovies = () => {
  return (
    <div className="flex flex-col space-y-5 px-2">
      <div className="flex h-10 items-center space-x-2 font-bold text-brand-white">
        <div className="h-full w-1 bg-amber-400"></div>
        <h1 className="text-3xl">Top Ten</h1>
        <AiOutlineRight className="mt-2 text-3xl" />
      </div>

      <div className="flex h-80 w-full justify-between overflow-auto whitespace-nowrap scrollbar-hide">
        <div className="flex h-full w-60 flex-col space-y-3 rounded-lg bg-brand-black p-1 md:p-2">
          <Image
            src={movieImg}
            width={1000}
            height={1000}
            alt=""
            className="aspect-square h-2/3 w-full"
          />
          <h1 className="text-xl font-semibold text-brand-white">
            KGF: Chapter 2
          </h1>
          <button className="w-full bg-amber-400 p-2 text-brand-white">
            Explore
          </button>
        </div>
        <div className="flex h-full w-60 flex-col space-y-3 rounded-lg bg-brand-black p-2 p-2">
          <Image
            src={movieImg}
            width={1000}
            height={1000}
            alt=""
            className="aspect-square h-2/3 w-full"
          />
          <h1 className="text-xl font-semibold text-brand-white">
            KGF: Chapter 2
          </h1>
          <button className="w-full bg-amber-400 p-2 text-brand-white">
            Explore
          </button>
        </div>
        <div className="flex h-full w-60 flex-col space-y-3 rounded-lg bg-brand-black p-2 p-2">
          <Image
            src={movieImg}
            width={1000}
            height={1000}
            alt=""
            className="aspect-square h-2/3 w-full"
          />
          <h1 className="text-xl font-semibold text-brand-white">
            KGF: Chapter 2
          </h1>
          <button className="w-full bg-amber-400 p-2 text-brand-white">
            Explore
          </button>
        </div>
        <div className="flex h-full w-60 flex-col space-y-3 rounded-lg bg-brand-black p-2">
          <Image
            src={movieImg}
            width={1000}
            height={1000}
            alt=""
            className="aspect-square h-2/3 w-full"
          />
          <h1 className="text-xl font-semibold text-brand-white">
            KGF: Chapter 2
          </h1>
          <button className="w-full bg-amber-400 p-2 text-brand-white">
            Explore
          </button>
        </div>
        <div className="flex h-full w-60 flex-col space-y-3 rounded-lg bg-brand-black p-2 p-2">
          <Image
            src={movieImg}
            width={1000}
            height={1000}
            alt=""
            className="aspect-square h-2/3 w-full"
          />
          <h1 className="text-xl font-semibold text-brand-white">
            KGF: Chapter 2
          </h1>
          <button className="w-full bg-amber-400 p-2 text-brand-white">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};
