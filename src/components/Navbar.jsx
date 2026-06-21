import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold border-b-2 border-green-600 pb-1"
      : "text-gray-700 dark:text-gray-300 hover:text-green-600 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-green-700">
          🌿 EcoStay
        </h1>

        <div className="flex gap-6 items-center">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/booking" className={linkClass}>
            Booking
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          <NavLink to="/components" className={linkClass}>
            Components
          </NavLink>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg border dark:border-gray-600"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <NavLink
            to="/booking"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Book Now
          </NavLink>
        </div>

      </div>
    </nav>
  );
}