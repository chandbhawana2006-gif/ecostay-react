import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import ComponentsDemo from "./pages/ComponentsDemo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route
            path="about"
            element={<About />}
          />

          <Route
            path="booking"
            element={<Booking />}
          />

          <Route
            path="contact"
            element={<Contact />}
          />

          <Route
            path="components"
            element={<ComponentsDemo />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}