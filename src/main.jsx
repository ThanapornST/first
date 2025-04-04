import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import HI from './hi.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HI />} />     {/* แสดง App.jsx ที่ / */}
        <Route path="/hi" element={<App />} />    {/* แสดง HI.jsx ที่ /hi */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
