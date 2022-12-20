import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './views/Home';
import Contact from './views/Contact';

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
