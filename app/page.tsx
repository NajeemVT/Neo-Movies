import FeaturedMovies from "./components/FeaturedMovies";
import Footer from "./components/Footer";
import MovieOfToday from "./components/MovieOfToday";
import { TopTenMovies } from "./components/TopTenMovies";

export default function Home() {
  return (
    <div className="m-1 flex flex-col space-y-2 md:space-y-5">
      <MovieOfToday />
      <FeaturedMovies />
      <TopTenMovies />
      <TopTenMovies />
      <TopTenMovies />
      <TopTenMovies />
      <Footer />
    </div>
  );
}
