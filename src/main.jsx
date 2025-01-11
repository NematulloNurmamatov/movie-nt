import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import "./index.css";

// Dinamik yuklanadigan komponentlar
const Home = lazy(() => import('./pages/Home.jsx'));
const TaniqliKishilar = lazy(() => import('./pages/People/TaniqliKishilar.jsx'));
const PersonDetail = lazy(() => import('./pages/People/PersonDetail.jsx'));
const MovieList = lazy(() => import('./pages/Movie/MovieList.jsx'));
const Tv = lazy(() => import('./pages/TvShows/Tv.jsx'));
const MovieDetail = lazy(() => import('./pages/Movie/MovieDetail.jsx'));

// const TvDetail = lazy(() => import('./pages/TvShows/TvDetail.jsx')); // TvDetail komponentini yuklash

// Yuklash komponentini import qilish
import Loading from './components/Loading';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Suspense yordamida ThreeDot bilan yuklanish animatsiyasini ko'rsatamiz */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="taniqlikishilar" element={<TaniqliKishilar />} />
            <Route path="person/:id" element={<PersonDetail />} /> {/* To'g'ri dinamik marshrut */}
            <Route path="movie/:type" element={<MovieList />} />
            <Route path="tv/:type" element={<Tv />} />
            <Route path="movie/popular/:id" element={<MovieDetail />} /> 
            <Route path="movie/top_rated/:id" element={<MovieDetail />} /> 
            <Route path="movie/upcoming/:id" element={<MovieDetail />} /> 
            <Route path="movie/now_playing/:id" element={<MovieDetail />} /> 




            {/* <Route path="tv/:id" element={<TvDetail />} /> TvDetail marshruti qo'shildi */}

            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
