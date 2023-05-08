import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import SearchMovies from "./SearchMovies";
const Header = () => {
  return (
    <header className="bg-brand-primary shadow-2xl">
      <nav className="flex items-center justify-between space-x-5 px-3 py-4 md:px-8">
        <Link
          className="flex items-center space-x-4 text-xl font-bold leading-none md:text-2xl"
          href="/"
        >
          <span className="text-brand-action">NEO Movies</span>
        </Link>
        <ul className="mr-4 flex items-center justify-end">
          <li className="relative">
            <SearchMovies />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
