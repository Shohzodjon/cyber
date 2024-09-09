import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import AboutPage from "./About";
import RegisterPage from "./pages/Register";
import ProtectedRouter from "./ProtectedRouter";

const getAccessToken = () => {
  return false;
};

const isAuthenticated = () => {
  return !!getAccessToken();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
    index: true,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    element: <ProtectedRouter isAuthenticated={isAuthenticated()} />,
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
]);

export default router;
