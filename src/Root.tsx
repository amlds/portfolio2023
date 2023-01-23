import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Project from './views/Project';
import PageNotFound from './views/pageNotFound';

import Header from './components/Header';

import SwitchPages from './components/SwitchPage';

interface ButtonThemeProps {
  setTheme: (newTheme: 'light' | 'dark') => void
}

const Root: React.FC<ButtonThemeProps> = ({setTheme}) => {
  return (
    <BrowserRouter>
      <Header setTheme={setTheme}/>
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
