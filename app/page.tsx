import { use } from "react";
import FeaturedMovies from "./components/FeaturedMovies";
import MovieOfTheDay from "./components/MovieOfTheDay";
import TopFiveMovies from "./components/TopFiveMovies";
import FanFavoriteMovies from "./components/FanFavoriteMovies";
import MovieCollection from "./components/MovieCollection";

export default function Home() {
  const movieOfTheDay = use(MovieOfTheDay());
  const topFiveMovies = use(TopFiveMovies());
  const fanFavoriteMovies = use(FanFavoriteMovies());
  const movieCollection = use(MovieCollection());

  return (
    <div className="m-1 flex flex-col space-y-2 pb-40 md:space-y-8">
      {movieOfTheDay}
      <FeaturedMovies />
      {topFiveMovies}
      {fanFavoriteMovies}
      {movieCollection}
    </div>
  );
}
