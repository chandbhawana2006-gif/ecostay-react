import { Link } from "react-router-dom";

export default function Card({
  image,
  title,
  description,
  price,
  rating,
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-green-700">
            {title}
          </h3>

          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm font-semibold">
            ⭐ {rating}
          </span>
        </div>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-green-700">
              ₹{price}
            </span>
            <span className="text-gray-500 text-sm">
              {" "}
              / night
            </span>
          </div>

          <Link
            to="/booking"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Book Now
          </Link>
        </div>

      </div>
    </div>
  );
}