import { Route, HashRouter, Routes } from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { HotelListing } from "./pages/HotelListing";
import { HotelDetails } from "./pages/HotelDetails";
import { Booking } from "./pages/Booking";
import { NotFound } from "./pages/NotFound";

export function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="hotels" element={<HotelListing />} />
          <Route path="hotels/:id" element={<HotelDetails />} />
          <Route path="booking/:id" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
