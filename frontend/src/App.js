import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Subscribe from './Components/Subscribe/Subscribe';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Details from './Components/Details/Details';
import About from './Components/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nilkant from './Nilkant.js'

function NameForm() {
  const [makeEmpty, setMakeEmpty] = useState(false);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setMakeEmpty={setMakeEmpty} />} />

          <Route path="/News" element={<News />} />

          <Route path="/About" element={<About />} />

          <Route path="/Contact" element={<Contact />} />

          <Route path="/Details" element={<Details />} />

          <Route path="/Subscribe" element={<Subscribe />} />
          <Route path="/nilkanttest" element={<Nilkant />} />
        </Routes>
      </Router>
    </>
  );
}

export default NameForm;
