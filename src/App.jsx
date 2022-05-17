import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home';
import AddPage from './pages/add/add';
import NotFound from './pages/404/not-found';
import EditPage from './pages/edit/edit';
import DetailPage from './pages/detail/detail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="edit/:id" element={<EditPage />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
