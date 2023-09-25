import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import Spa from "./components/Spa/spa";
// import TheSpa from "./components/menuPages/theSpa/theSpa";
// import TheShop from "./components/menuPages/theShop/theShop";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",npm start
//     element: (
//       <div>
//         <App />
//       </div>
//     ),
//   },

//   {
//     path: "spa",
//     element: (
//       <div>
//         <Spa />
//       </div>
//     ),
//   },

//   {
//     path: "theSpa",
//     element: (
//       <div>
//         <TheSpa />
//       </div>
//     ),
//   },

//   {
//     path: "theShop",
//     element: (
//       <div>
//         <TheShop />
//       </div>
//     ),
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
