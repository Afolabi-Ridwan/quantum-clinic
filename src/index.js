import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Spa from "./components/Spa/spa";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },

  {
    path: "spa",
    element: (
      <div>
        <Spa />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
