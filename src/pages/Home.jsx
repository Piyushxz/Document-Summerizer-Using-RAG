import Navbar from "../components/Navbar"
import { useModal } from "../context/modal-context"
import SignInModal from "../components/SignInModal"
import Photo from "../assets/photo.png";
import SignUpModal from "../components/SignUpModal";
import Features from "../components/Features";
const Home = () =>{

    const {isSignInModalOpen,isSignUpModalOpen} = useModal()

    return(
    <>
    


    <Navbar/>
    <div className="flex flex-col items-center justify-center mt-20">
    <div className="w-full md:w-1/2 text-center">
        <h1 className="font-montserrat font-extrabold text-4xl md:text-6xl text-white">
        Document{" "}
        <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Summerizer
        </span>{" "}
        Using RAG.
        </h1>
        <h3 className="font-montserrat font-bold text-xl mt-4 text-white  ">
        Summarize long documents with the power of RAG technology, blending advanced retrieval and generation.
        </h3>
    </div>
    </div>


    <div className="mt-14">
        <div className="flex justify-center pt-20 pb-6">
            <h1 className="font-montserrat font-extrabold text-xl md:text-5xl text-white">Key Features of Our Tool</h1>
        </div>
        
        <Features/>
    </div>
    

    

    </>

    )
}

export default Home