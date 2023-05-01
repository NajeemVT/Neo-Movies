import Link from "next/link";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <header className="bg-brand-primary shadow-2xl">
      <nav className="flex items-center justify-between space-x-5 px-3 py-4 md:px-8">
        <a
          className="flex items-center space-x-4 text-xl font-bold leading-none md:text-2xl"
          href="#"
        >
          <span className="block text-brand-action md:hidden">NEO</span>
          <span className="hidden text-brand-action md:block">NEO Movies</span>
        </a>
        <ul className="mr-4 flex items-center justify-end">
          <li className="relative">
            <input
              type="text"
              className="w-48 rounded-md bg-brand-white py-2 pl-3 pr-4 text-sm font-semibold text-brand-black outline-none md:w-96"
              placeholder="Search"
              spellCheck="false"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-brand-primary hover:cursor-pointer">
              <FaSearch />
            </span>
          </li>
          <li>
            <a className="px-4 py-2 font-semibold text-brand-white" href="#">
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
