import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;