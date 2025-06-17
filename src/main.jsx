import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import "./index.css";

import { router } from "./Routes/Router.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </HelmetProvider>
  </StrictMode>
);
