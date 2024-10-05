import Navbar from "../components/Navbar"
import { useModal } from "../context/modal-context"
import SignInModal from "../components/SignInModal"
import Photo from "../assets/photo.png";
import SignUpModal from "../components/SignUpModal";
const Home = () =>{

    const {isSignInModalOpen,isSignUpModalOpen} = useModal()

    return(
    <>
    


    <Navbar/>
    {
    isSignInModalOpen &&
    <SignInModal/>
    }
    {
        isSignUpModalOpen &&
        <SignUpModal/>
    }

<div className="flex flex-col md:flex-row justify-center mt-14">
  <div className="md:w-1/2 w-full pt-10 md:pt-20 text-center md:text-left">
    <h1 className="font-montserrat font-extrabold text-4xl md:text-6xl text-white">
      Document{" "}
      <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
        Summerizer
      </span>{" "}
      Using RAG.
    </h1>
  </div>

  <div className="w-full md:w-1/3 pl-0 md:pl-4 mt-8 md:mt-0 flex justify-center">
    <img
      src={Photo}
      alt="Document Summerizer"
      className="w-8/12 md:w-full"
    />
  </div>
</div>


    </>

    )
}

export default Home