import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToAbout = () => {
    if (location.pathname === '/') {

      scroller.scrollTo('about-us', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    } else {
   
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo('about-us', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      }, 100); 
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between px-6 md:px-12 py-4 items-center bg-black">
      <div className="font-montserrat mb-4 md:mb-0">
        <Link to="/" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
          ProjectName
        </Link>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <button
          onClick={scrollToAbout}
          className="bg-black text-sm md:text-base p-2 rounded-md hover:bg-gray-800 transition duration-300 text-white"
        >
          About Us
        </button>
        <Link to="/upload" className="bg-black text-sm md:text-base p-2 rounded-md hover:bg-gray-800 transition duration-300 text-white">
          File Upload
        </Link>
        <button
          onClick={() => modalDispatch({ type: 'OPEN_SIGNIN_MODAL' })}
          className="bg-black text-sm md:text-base p-2 rounded-md hover:bg-gray-800 transition duration-300 text-white"
        >
          Login
        </button>
        <button
          onClick={() => modalDispatch({ type: 'OPEN_SIGNUP_MODAL' })}
          className="bg-black text-sm md:text-base p-2 rounded-md hover:bg-gray-800 transition duration-300 text-white"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
