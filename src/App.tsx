import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserInfoRequest } from 'pages/main/reducer';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Cookies from 'js-cookie';

import MainPage from 'pages/main';
import Dashboard from 'pages/dashboard';
import Stocks from 'pages/stocks';
import Savings from 'pages/savings';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/savings" element={<Savings />} />
      <Route path="/stocks" element={<Stocks />} />
    </Route>
  )
);

const App = () => {
  const dispatch = useDispatch();
  const token = Cookies.get('dashboardAccessToken');

  useEffect(() => {
    if (token) {
      dispatch(fetchUserInfoRequest(token as any));
    }
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
