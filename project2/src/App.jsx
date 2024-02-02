import React from 'react';
import './App.css';
import ProjectsPage from './components/ProjectsPage';
import ProjectPage from './components/ProjectPage';
import HomePage from './home/HomePage';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header className="sticky">
        <span className="logo">
          <img src="/img/mantap.jpg" alt="logo" width={'49'} height={"99"} />
        </span>
        <NavLink to="/" className='container2 button rounded'>
          <span className='icon-home'></span>
          Home
        </NavLink>
        <NavLink to="/projects" className='container3 button rounded'>
          Library
        </NavLink>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
