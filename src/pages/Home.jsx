import Navbar from "../components/Navbar";
import { useModal } from "../context/modal-context";
import { Element } from "react-scroll";
import Features from "../components/Features";
import Aboutus from "./Aboutus";

import Footer from "../components/Footer";
import { Button } from "../components/Button";


const Home = () => {


    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center md:mt-[250px] mt-24">
                <div className="w-full md:w-1/2 text-center">
                    <h1 className="font-montserrat font-extrabold text-4xl md:text-6xl text-white">
                        Document{" "}
                        <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                            Summerizer
                        </span>{" "}
                        Using RAG.
                    </h1>
                    <h3 className="font-montserrat font-bold text-xl mt-4 text-white">
                        Summarize long documents with the power of RAG technology, blending advanced retrieval and generation.
                    </h3>
                </div>
                <div className="mt-20">
                    <Button onClick={()=>window.open()}/>            
                </div>
            </div>

            <div className="mt-24">
                <div className="flex justify-center pt-20 pb-6">
                    <h1 className="font-montserrat font-extrabold text-xl md:text-5xl text-white">Key Features of Our Tool</h1>
                </div>
                <Features />
            </div>
            <div>
                <div className="flex justify-center mt-10">
                    <h1 className="font-montserrat font-extrabold text-4xl md:text-6xl text-white">How it works</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="text-center bg-gray-800 w-full md:w-1/4 rounded-lg m-2 hover:bg-white hover:text-black transition-all duration-300 p-4 pt-4 mt-2" style={{ minHeight: '16rem', maxHeight: '16rem' }}>
                        <h1 className="font-montserrat font-extrabold text-xl md:text-2xl text-white px-20 pt-20 pb-20 hover:text-black">
                            1. Upload Your Document
                        </h1>
                    </div>

                    <div className="text-center bg-gray-800 w-full md:w-1/4 rounded-lg m-2 hover:bg-white hover:text-black transition-all duration-300" style={{ minHeight: '16rem', maxHeight: '16rem' }}>
                        <h1 className="font-montserrat font-extrabold text-xl md:text-2xl text-white px-20 pt-20 pb-20 hover:text-black">
                            2. RAG technology processes the document.
                        </h1>
                    </div>

                    <div className="text-center bg-gray-800 w-full md:w-1/4 rounded-lg m-2 hover:bg-white hover:text-black transition-all duration-300" style={{ minHeight: '16rem', maxHeight: '16rem' }}>
                        <h1 className="font-montserrat font-extrabold text-xl md:text-2xl text-white px-20 pt-20 pb-20  hover:text-black">
                            3. Get your summarized results instantly and chat with your document.
                        </h1>
                    </div>
                </div>


            </div>




    <Element name="about-us">
        <Aboutus/>
    </Element>
    

    <Footer/>

    </>

    

        
        
    );
}


export default Home;
