import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './views/Home';
import Project from './views/Project';
import PageNotFound from './views/pageNotFound';


const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
