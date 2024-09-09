import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import AdminPage from "./pages/Admin";
import PostPage from "./pages/Post";
import UserPage from "./pages/Users";
import ProductPage from "./pages/Products";
import TodoPage from "./pages/Todos";

import ProtectedRouter from "./ProtectedRouter";

const getAccessToken = () => {
  return true;
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
        path: "/admin",
        element: <AdminPage />,
        children: [
          {
            index: true,
            element: <p>Welcome to the Admin Dashboard! Select an option from the sidebar to get started.</p>,
          },
          {
            path: "posts",
            element: <PostPage />,
          },
          {
            path: "users",
            element: <UserPage />,
          },
          {
            path: "products",
            element: <ProductPage />,
          },
          {
            path: "todos",
            element: <TodoPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
]);

export default router;
