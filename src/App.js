import React from 'react'
import Home from './pages/home';
import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import './index.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
