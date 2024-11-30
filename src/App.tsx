import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './css/App.css';
import Menu from './components/menu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <main>
          <Menu />
        </main>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
