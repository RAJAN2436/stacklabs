import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1A1A1A',
            color: '#fff',
            border: '1px solid #2A2A2A',
            fontFamily: "'Space Grotesk', sans-serif",
          },
          success: {
            iconTheme: { primary: '#FFD600', secondary: '#0A0A0A' },
          },
        }}
      />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about"    element={<About />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
