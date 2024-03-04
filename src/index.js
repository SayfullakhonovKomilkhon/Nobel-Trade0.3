import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Header} from "./pages/Header";
import Advantages from "./pages/Advantages";
import Katalog from "./pages/Katalog";
import Vacancies from "./pages/Vacancies";
import AboutCompany from "./pages/AboutCompany";
import OurPartners from "./pages/OurPartners";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/order",
    element: <Advantages />,
  },
  {
    path: "/catalog",
    element: <Katalog />,
  },
  {
    path: "/vacancies",
    element: <Vacancies />,
  },
  {
    path: "/aboutCompany",
    element: <AboutCompany />,
  },
  {
    path: "/ourPartners",
    element: <OurPartners />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
