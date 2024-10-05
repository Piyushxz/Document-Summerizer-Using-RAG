import Navbar from "../components/Navbar";
import { useModal } from "../context/modal-context";
import SignInModal from "../components/SignInModal";
import SignUpModal from "../components/SignUpModal";

const Aboutus = () => {
  const { isSignInModalOpen, isSignUpModalOpen } = useModal();

  return (
    <>
      <Navbar />
      {isSignInModalOpen && <SignInModal />}
      {isSignUpModalOpen && <SignUpModal />}

      <div className="container mx-auto p-4 mt-14">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h1 className="font-montserrat font-extrabold text-4xl md:text-6xl text-white mb-6">
              About Us
            </h1>
            <div className="space-y-4">
              {/* Accordion Item 1 */}
              <div className="border border-gray-700 rounded-lg shadow-md">
                <h2 className="bg-gray-800 p-4 rounded-t-lg">
                  <button className="text-left w-full font-semibold text-lg text-white" type="button">
                    Analyze Your Text
                  </button>
                </h2>
                <div className="p-4 bg-gray-900 rounded-b-lg">
                  <p className="text-gray-300">
                    Summarize your text quickly and efficiently.
                  </p>
                </div>
              </div>

              {/* Accordion Item 2 */}
              <div className="border border-gray-700 rounded-lg shadow-md">
                <h2 className="bg-gray-800 p-4 rounded-t-lg">
                  <button className="text-left w-full font-semibold text-lg text-white" type="button">
                    Free to Use
                  </button>
                </h2>
                <div className="p-4 bg-gray-900 rounded-b-lg">
                  <p className="text-gray-300">
                    It is a free-to-use AI tool to summarize your legal documents.
                  </p>
                </div>
              </div>

              {/* Accordion Item 3 */}
              <div className="border border-gray-700 rounded-lg shadow-md">
                <h2 className="bg-gray-800 p-4 rounded-t-lg">
                  <button className="text-left w-full font-semibold text-lg text-white" type="button">
                    Browser Compatible
                  </button>
                </h2>
                <div className="p-4 bg-gray-900 rounded-b-lg">
                  <p className="text-gray-300">
                    This tool works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, and Opera.
                  </p>
                </div>
              </div>
            </div>

            {/* Suggestions Section */}
            <div className="mt-6">
              <h1 className="text-2xl font-semibold text-white mb-4">If you have any suggestions, let us know!</h1>
              <label htmlFor="exampleFormControlInput1" className="block text-lg font-medium mb-2 text-white">Email address</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white mb-4"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              <label htmlFor="exampleFormControlTextarea1" className="block text-lg font-medium mb-2 text-white">Your Remarks</label>
              <textarea
                className="w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white mb-4"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your comments here"
              ></textarea>
              <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
