import LoginSuccess from "./pages/LoginSuccess";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import ComponentsDemo from "./pages/ComponentsDemo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import AIPlanner from "./pages/AIPlanner";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route
            path="about"
            element={<About />}
          />

          <Route
            path="booking"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>}

          />

          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />

          <Route
            path="components"
            element={<ComponentsDemo />}
          />
          <Route
            path="ai-planner"
            element={
              <ProtectedRoute>
                <AIPlanner />
              </ProtectedRoute>
            }
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}