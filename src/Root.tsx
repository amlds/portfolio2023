import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './views/Home';
import Project from './views/Project';
import PageNotFound from './views/pageNotFound';


import SwitchPages from './components/SwitchPage';

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <SwitchPages>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route element={<PageNotFound />} />
      </SwitchPages>
    </BrowserRouter>
  );
}

export default Root;
