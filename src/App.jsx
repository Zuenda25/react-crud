import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/add/add';
import Home from './pages/home/home';
import Edit from './pages/edit/edit';
import NotFound from './pages/404/not-found';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
