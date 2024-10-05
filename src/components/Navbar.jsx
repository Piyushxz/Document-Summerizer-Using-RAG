import { useModal } from "../context/modal-context";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const { modalDispatch } = useModal();

  return (
    <div className="flex flex-col md:flex-row justify-between px-6 md:px-12 py-4 items-center bg-black">
      <div className="font-montserrat mb-4 md:mb-0">
        {/* Wrap the Project Name in a Link to redirect to the home page */}
        <Link to="/" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
          ProjectName
        </Link>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        {/* File Upload and About Us links */}
        <Link to="/about" className="bg-black text-sm md:text-base p-2 rounded-md hover:bg-gray-800 transition duration-300 text-white">
          About Us
        </Link>
        <Link to="/upload" className="bg-black text-sm md:text-base p-2 rounded-md hover:bg-gray-800 transition duration-300 text-white">
          File Upload
        </Link>

        {/* Login and Signup buttons */}
        <button
          onClick={() => modalDispatch({ type: "OPEN_SIGNIN_MODAL" })}
          className="bg-black text-sm md:text-base p-2 rounded-md hover:bg-gray-800 transition duration-300 text-white"
        >
          Login
        </button>
        <button
          onClick={() => modalDispatch({ type: "OPEN_SIGNUP_MODAL" })}
          className="bg-black text-sm md:text-base p-2 rounded-md hover:bg-gray-800 transition duration-300 text-white"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
