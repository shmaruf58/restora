import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Blog from "./components/Blog";
import CardDetails from "./components/CardDetails";
import Login from "./components/login/Login";
import AuthProvider from "./components/providers/AuthProvider";
import Signup from "./components/signUp/Signup";
import PrivateRoute from "./components/routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },

      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },

      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>

      <RouterProvider router={router} />
      
    </AuthProvider>
  </React.StrictMode>
);
