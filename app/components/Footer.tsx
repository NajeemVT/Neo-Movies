import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="flex h-80 flex-col items-center justify-around border-t-2 border-brand-black bg-brand-primary text-brand-white shadow-2xl md:flex-col md:px-14">
      <div className="flex flex-col items-center space-y-7">
        <h1 className="text-3xl font-bold text-amber-400">Neo Movies</h1>
        <ul className="flex space-x-5 text-sm md:text-lg">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Advertising</li>
          <li>Help</li>
        </ul>
        <p className="hidden text-lg font-semibold md:block">
          Developed by NAJEEM V T
        </p>
      </div>
      <div className="flex flex-col space-y-5">
        <ul className="flex space-x-5 text-3xl">
          <li>
            <AiOutlineTwitter />
          </li>
          <li>
            <AiFillFacebook />
          </li>
          <li>
            <AiFillInstagram />
          </li>
          <li>
            <AiFillYoutube />
          </li>
        </ul>

        <button className="rounded-md bg-green-800 px-14 py-3 text-brand-white">
          Contact Us
        </button>
      </div>
      <p className="block text-sm font-semibold md:hidden">
        Developed by NAJEEM V T
      </p>
    </footer>
  );
};

export default Footer;
