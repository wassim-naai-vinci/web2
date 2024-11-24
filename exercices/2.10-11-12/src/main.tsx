import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieListPage from "./components/pages/MovieListPage";
import HomePage from "./components/pages/HomePage";
import CinemaPage from "./components/pages/CinemaPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/CinemaPage",
        element: <CinemaPage />,
      },
      {
        path: "/MovieListPage",
        element: <MovieListPage />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
