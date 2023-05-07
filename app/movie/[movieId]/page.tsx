import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { MovieType } from "@/utils/contentfulClient";
import RecommendedMovies from "@/app/components/RecommendedMovies";
import Error from "@/app/components/Error";

async function fetchMovie(movieId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/movies/${movieId}`
  );
  const movies = (await response.json()).map((p: any) => p.fields);
  return movies[0];
}

const MovieDetails = async ({
  params: { movieId },
}: {
  params: { movieId: string };
}) => {
  if (isNaN(Number(movieId))) return <Error />;

  const movie = (await fetchMovie(movieId)) as MovieType;
  if (!movie) return <Error />;
  return (
    <div className="flex flex-col space-y-10 px-5 py-10 md:space-y-5">
      <div className="flex h-10 flex-col items-start justify-between font-bold text-brand-white md:flex-row md:items-center md:space-x-2">
        <h1 className="text-2xl md:text-4xl">{movie.title}</h1>
        <section className="flex flex-col items-center justify-center space-y-2 text-brand-white">
          <h3 className="hidden text-xl md:block">RATING</h3>
          <p className="flex items-center space-x-2 text-xl">
            <AiFillStar className="text-brand-action" />
            <span>{movie.imdbRating}/10</span>
          </p>
        </section>
      </div>

      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex flex-col md:flex-row md:space-x-5">
          <Image
            src={`https:${movie.posterImage.fields.file?.url}`}
            width={1000}
            height={1000}
            placeholder="blur"
            blurDataURL="/"
            alt=""
            className="aspect-video h-2/5 w-fit md:w-1/2"
          />
          <div className="flex w-full flex-col space-y-5 py-5 text-brand-white md:w-1/2">
            <section className="flex space-x-5 border-y px-2 py-5 md:p-5">
              <h4 className="font-bold">Director</h4>
              <p>{movie.director}</p>
            </section>
            <section className="flex space-x-5 border-y px-2 py-5 md:p-5">
              <h4 className="font-bold">Writers</h4>
              <p>{movie.writers.join(", ")}</p>
            </section>
            <section className="flex space-x-5 border-y px-2 py-5 md:p-5">
              <h4 className="font-bold">Stars</h4>
              <p>{movie.cast.join(", ")}</p>
            </section>
            <a href={movie.streamingUrl}>
              <button className="w-full rounded-md bg-brand-action px-2 py-4 text-brand-white">
                Watch Online
              </button>
            </a>
          </div>
        </div>

        <article className="flex flex-col space-y-5 text-brand-white">
          <h3 className="text-xl font-bold">Summary</h3>
          <p className="w-fit text-justify md:w-1/2">{movie.description}</p>
        </article>
      </div>
      <div className="py-5 md:pb-40 md:pt-20">
        <RecommendedMovies />
      </div>
    </div>
  );
};

export default MovieDetails;
