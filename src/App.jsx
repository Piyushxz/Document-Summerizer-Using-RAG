import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FileUpload from './components/FileUpload';
import AboutUs from './components/Aboutus';  // Import the AboutUs component

function App() {
  return (
    <Router>
      {/* Define the routes within the Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/upload" element={<FileUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
