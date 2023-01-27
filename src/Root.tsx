import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Project from './views/Project';
import PageNotFound from './views/pageNotFound';

import Header from './components/Header';

import SwitchPages from './components/SwitchPage';

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <SwitchPages>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<Project />} />
        <Route element={<PageNotFound />} />
      </SwitchPages>
    </BrowserRouter>
  );
}

export default Root;
