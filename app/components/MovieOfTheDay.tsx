import Image from "next/image";
import { MovieType } from "@/utils/contentfulClient";

async function fetchMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_DOMAIN}/api/movies/search?tag=movie-of-the-day`
  );
  const movies = (await response.json()).map((p: any) => p.fields);
  return movies;
}

const MovieOfTheDay = async () => {
  const movies = (await fetchMovies()) as MovieType[];
  const movieOfTheDay = movies[0];
  return (
    <div className="h-32 w-full md:h-64">
      <Image
        src={`https:${movieOfTheDay.posterImage.fields.file?.url}`}
        width={1000}
        height={1000}
        placeholder="blur"
        blurDataURL="/"
        unoptimized={true}
        alt=""
        className="aspect-square h-full w-full"
      />
    </div>
  );
};

export default MovieOfTheDay;
