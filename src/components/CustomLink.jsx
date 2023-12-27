import { Link } from "react-router-dom";

const CustomLink = ({ path, text, odd }) => (
  <Link
    to={path}
    className={`inline-block  px-8 py-3 rounded-2xl text-xs text-white shadow-xl hover:scale-75 hover:shadow-2xl hover:rounded-2xl transition delay-75 duration-300 ease-in-out ${
      odd ? "bg-customGreen" : " lg:text-black bg-white"
    }`}
  >
    {text}
  </Link>
);
export default CustomLink;
