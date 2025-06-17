import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import MyBookings from '../pages/My-Bookings/MyBookings';
import Blogs from '../pages/Blogs/Blogs';
import Contactus from '../pages/Contactus/Contactus';
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "my-bookings/:id",
        Component: MyBookings,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "contact-us",
        Component: Contactus,
      },
      {
        path: "doctorDetails/:id",
        loader: () => fetch("/data/doctorData.json"),
        Component: DoctorDetails,
      },
    ],
  },
]);
  