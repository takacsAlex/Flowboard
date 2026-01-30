import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/home/home.tsx';
import AuthPage from './pages/auth/auth.tsx';
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element: <HomePage />},
  {path:"/signin", element: <AuthPage />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);