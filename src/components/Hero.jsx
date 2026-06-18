import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const images = [
    "https://www.homestaysofindia.com/wp-content/uploads/2024/07/Exterior-1-The-Cobblestone-Hideaway-Homestay-Rongli.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKH2PzkPH-FyYozhLShWzWEhB4mAC_Vjfmw&s",
    "https://ecotourism.org/wp-content/uploads/2019/07/ecotourismsolutiontoovertourism.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYy51CCvOEptFBBieWccO6pA10xVDnVaFUeA&s",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      {/* SLIDER IMAGES */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="EcoStay"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative text-center text-white px-6">

        <h1 className="text-5xl md:text-7xl font-bold">
          EcoStay
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Discover eco-friendly homestays in mountains, forests & villages
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          <Link
            to="/booking"
            className="bg-green-600 px-8 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Book Now
          </Link>

          <Link
            to="/about"
            className="bg-white text-green-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Explore More
          </Link>

        </div>

      </div>
    </div>
  );
}