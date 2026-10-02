import React, { Suspense, useEffect } from 'react';
import { AxiosError } from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch } from './store/hooks';
import { loadUserThunk } from './store/reducers/user';
import { loadGenreThunk } from './store/reducers/book';
import { RequireAuth } from './components/RequireAuth/RequireAuth';

import Book from './pages/Book/Book';
import Cart from './pages/Cart/Cart';
import Catalog from './pages/Catalog/Catalog';
import Favorite from './pages/Favorite/Favorite';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Loader from './components/Loaders/Suspense';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import Signup from './pages/Signup/Signup';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token');

        if (token) {
          dispatch(loadUserThunk());
        }

        dispatch(loadGenreThunk());
      } catch (error) {
        if (error instanceof AxiosError) {
          const { response } = error as AxiosError;
          console.error('Error init >> ', response?.data);
        }
      }
    })();
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='catalog/:id' element={<Book />} />
          <Route path='cart' element={<Cart />} />

          <Route element={<RequireAuth />}>
            <Route path='profile' element={<Profile />} />
            <Route path='favorite' element={<Favorite />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
