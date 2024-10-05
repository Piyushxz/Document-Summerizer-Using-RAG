import Navbar from "../components/Navbar";
import { useModal } from "../context/modal-context";
import SignInModal from "../components/SignInModal";
import SignUpModal from "../components/SignUpModal";
import { useState } from "react";

const Aboutus = () => {
  const { isSignInModalOpen, isSignUpModalOpen } = useModal();
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

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
                  <button
                    className="text-left w-full font-semibold text-lg text-white flex items-center justify-between"
                    type="button"
                    onClick={() => toggleAccordion(1)}
                  >
                    Analyze Your Text
                    <span className={`transition-transform duration-200 ${openAccordion === 1 ? 'transform rotate-90' : ''}`}>
                      ➤
                    </span>
                  </button>
                </h2>
                {openAccordion === 1 && (
                  <div className="p-4 bg-gray-900 rounded-b-lg">
                    <p className="text-gray-300">
                      Summarize your text quickly and efficiently.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div className="border border-gray-700 rounded-lg shadow-md">
                <h2 className="bg-gray-800 p-4 rounded-t-lg">
                  <button
                    className="text-left w-full font-semibold text-lg text-white flex items-center justify-between"
                    type="button"
                    onClick={() => toggleAccordion(2)}
                  >
                    Free to Use.
                    <span className={`transition-transform duration-200 ${openAccordion === 2 ? 'transform rotate-90' : ''}`}>
                      ➤
                    </span>
                  </button>
                </h2>
                {openAccordion === 2 && (
                  <div className="p-4 bg-gray-900 rounded-b-lg">
                    <p className="text-gray-300">
                      It is a free-to-use AI tool to summarize your legal documents.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 3 */}
              <div className="border border-gray-700 rounded-lg shadow-md">
                <h2 className="bg-gray-800 p-4 rounded-t-lg">
                  <button
                    className="text-left w-full font-semibold text-lg text-white flex items-center justify-between"
                    type="button"
                    onClick={() => toggleAccordion(3)}
                  >
                    Browser Compatible
                    <span className={`transition-transform duration-200 ${openAccordion === 3 ? 'transform rotate-90' : ''}`}>
                      ➤
                    </span>
                  </button>
                </h2>
                {openAccordion === 3 && (
                  <div className="p-4 bg-gray-900 rounded-b-lg">
                    <p className="text-gray-300">
                      This tool works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, and Opera.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Suggestions Section */}
            <div className="mt-6">
              <h1 className="font-montserrat font-bold text-2xl md:text-4xl text-white mb-4">
                If you have any suggestions, let us know!
              </h1>

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
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
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
