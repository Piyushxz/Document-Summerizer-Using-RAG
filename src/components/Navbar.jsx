import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useModal } from '../context/modal-context';
import Sidebar from './Sidebar';
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {modalDispatch} = useModal()
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
    <div className="flex  justify-between  gap-4 md:gap-0  md:px-12 py-4 items-center z-200 bg-black fixed top-0 w-full md:absolute z-[250]">
      <div className='block md:hidden'>
        <Sidebar/>
      </div>
      
      <div className="font-montserrat mb-0">
        <Link to="/" className="text-3xl md:text-xl lg:text-5xl font-extrabold text-white">
          FraternityAI
        </Link>
      </div>

      <div className="flex justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
        <button
          onClick={() => modalDispatch({ type: 'OPEN_SIGNIN_MODAL' })}
          className="bg-black text-sm hidden md:block p-2 rounded-md hover:bg-gray-800 transition duration-300 text-white"
        >
          Login
        </button>
        <button
          onClick={() => modalDispatch({ type: 'OPEN_SIGNUP_MODAL' })}
          className="bg-black text-sm hidden md:block p-2 rounded-md hover:bg-gray-800 transition duration-300 text-white"
        >
          Signup
        </button>

        <button
          onClick={scrollToAbout}
          className="bg-black text-sm md:text-base p-2 rounded-md hover:bg-gray-800 transition duration-300 text-white"
        >
          About Us
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
