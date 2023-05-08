import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { MovieType, client } from "@/utils/contentfulClient";
import Link from "next/link";

async function fetchMovies() {
  const results = (
    await client.getEntries({
      content_type: "neoMovies",
      limit: 5,
    })
  )?.items;
  const movies = results.length > 0 ? results.map((p: any) => p.fields) : [];
  return movies;
}

const MovieCollection = async () => {
  const movies = ((await fetchMovies()) as MovieType[]) || [];
  return (
    <div className="flex flex-col space-y-5 px-2">
      <div className="flex h-10 items-center space-x-2 font-bold text-brand-white">
        <div className="h-full w-1 bg-brand-action"></div>
        <h1 className="text-3xl">All Movies</h1>
        <Link href="/all-movies">
          <AiOutlineRight className="mt-2 text-3xl hover:text-brand-action" />
        </Link>
      </div>
      {movies.length > 0 && (
        <div className="flex h-80 w-full justify-between overflow-auto whitespace-nowrap scrollbar-hide">
          {movies &&
            movies.slice(0, 5).map((movie: MovieType) => (
              <div
                key={movie.id}
                className="flex h-full min-w-fit max-w-sm flex-col space-y-3 rounded-lg bg-brand-secondary p-1 shadow-2xl md:p-2"
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
                <Link href={`${process.env.HOST_DOMAIN}/movie/${movie.id}`}>
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

export default MovieCollection;
