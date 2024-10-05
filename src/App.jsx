import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FileUpload from './pages/FileUpload';
import AboutUs from './pages/Aboutus'; 
import SignInModal from './components/SignInModal';
import SignUpModal from './components/SignUpModal';
import { useModal } from './context/modal-context';
function App() {
  
  const { isSignInModalOpen, isSignUpModalOpen } = useModal();

  return (
    <>
       {isSignInModalOpen && <SignInModal />}
    {isSignUpModalOpen && <SignUpModal />}
    <Router>
      {/* Define the routes within the Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/upload" element={<FileUpload />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
