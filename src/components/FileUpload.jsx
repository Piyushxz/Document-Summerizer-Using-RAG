import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar

const FileUpload = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the file upload logic here
    console.log("File upload form submitted");
  };

  return (
    <>
      <Navbar /> {/* Ensure Navbar is visible */}
      <div className="flex flex-col items-center justify-center mt-10 w-full max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="mb-6 w-full">
          <div className="flex items-center justify-center">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG, GIF, or PDF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                accept=".pdf,.svg,.png,.jpg,.jpeg,.gif"
                className="hidden"
              />
            </label>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Chatbox Container */}
        <div className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Chatbox
          </h2>
          <div className="overflow-y-auto h-48 border border-gray-300 rounded-lg p-2 bg-white dark:bg-gray-800">
            {/* Messages will be displayed here */}
            <div className="flex items-start mb-2">
              <div className="bg-blue-500 text-white p-2 rounded-lg">
                Hello! How can I assist you today?
              </div>
            </div>
            <div className="flex items-start mb-2">
              <div className="bg-gray-300 p-2 rounded-lg">
                I have a question regarding file uploads.
              </div>
            </div>
            {/* Add more messages here */}
          </div>
          <div className="mt-2 flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="ml-2 bg-blue-500 text-white rounded-lg p-2"
              type="button"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
