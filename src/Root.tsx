import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './views/Home';
import Contact from './views/Contact';
import Project from './views/Project';
import PageNotFound from './views/pageNotFound';

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
