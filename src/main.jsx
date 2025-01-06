import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import "./index.css"
import Home from './pages/Home.jsx';
import TaniqliKishilar from './pages/People/TaniqliKishilar.jsx';
import PersonDetail from './pages/People/PersonDetail.jsx'; // Dinamik sahifa

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="taniqlikishilar" element={<TaniqliKishilar />} />
          <Route path="person/:id" element={<PersonDetail />} /> {/* To'g'ri dinamik marshrut */}
          
          <Route path="*" element={<h1>Error page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
