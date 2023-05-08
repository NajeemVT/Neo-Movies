import Image from "next/image";
import { MovieType, client } from "@/utils/contentfulClient";
import Link from "next/link";

async function fetchMovies() {
  const results = (
    await client.getEntries({
      content_type: "neoMovies",
      "fields.tags[in]": "movie-of-the-day",
      limit: 1,
    })
  )?.items;
  const movies = results.length > 0 ? results.map((p: any) => p.fields) : [];
  return movies;
}

const MovieOfTheDay = async () => {
  const movies = ((await fetchMovies()) as MovieType[]) || [];
  if (movies.length > 0) {
    const movieOfTheDay = movies[0];
    return (
      <div className="h-32 w-full md:h-64">
        <Link href={`${process.env.HOST_DOMAIN}/movie/${movies[0].id}`}>
          <Image
            src={`https:${movieOfTheDay.posterImage.fields.file?.url}`}
            width={1000}
            height={1000}
            placeholder="blur"
            blurDataURL="/"
            alt=""
            className="aspect-square h-full w-full"
          />
        </Link>
      </div>
    );
  }
};

export default MovieOfTheDay;
