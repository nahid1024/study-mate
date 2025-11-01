import React from "react";
import ReactDOM from "react-dom/client";
import Pomodoro from "./pages/pomodoro";
import Home from "./pages/home";
import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {path:'/pomodoro', element: <Pomodoro /> }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
