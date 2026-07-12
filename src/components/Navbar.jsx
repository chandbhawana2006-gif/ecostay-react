import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const token = localStorage.getItem("token");


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/login");
  };


  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 dark:text-green-400 font-semibold border-b-2 border-green-600 pb-1"
      : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition";


  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-3xl font-bold text-green-700 dark:text-green-400">
            🌿 EcoStay
          </h1>
        </NavLink>


        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 items-center">

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



        {/* Buttons */}
        <div className="flex gap-3 items-center">


          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>



          {/* Authentication Buttons */}
          {token ? (

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>

          ) : (

            <NavLink
              to="/login"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Login
            </NavLink>

          )}






        </div>

      </div>

    </nav>
  );
}