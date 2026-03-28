import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { HotelListing } from "./pages/HotelListing";
import { HotelDetails } from "./pages/HotelDetails";
import { Booking } from "./pages/Booking";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "hotels", Component: HotelListing },
      { path: "hotels/:id", Component: HotelDetails },
      { path: "booking/:id", Component: Booking },
      { path: "*", Component: NotFound },
    ],
  },
]);
