import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

// Nested routes

// In nested routes u can have a parent with or without 'path'
// With path, the given path is always put before the childs given path
// Without the path, this isn't the case
// With <Outlet> u can render the children into the parent component given in the parent route
// 'index' makes that child the default route to render into the parents <Outlet>
// Also send params to a url (dynamic segment)
// With 'x/:id' u can catch the param in ur element linked to the route
// U can do this via 'useParams', this is possible with multiple params
