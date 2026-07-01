
import { useEffect, useState } from "react";
import { Input, Button } from "../components/ui";
import Hero from "../components/Hero";
import Card from "../components/Card";

export default function Home() {
  console.log("HOME RENDERED");

  const [stays, setStays] = useState([]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const [editStay, setEditStay] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log("API CALL START");

    fetch("http://localhost:5000/api/stays")
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);
        setStays(data);
      })
      .catch((err) => console.error("Error fetching stays:", err));
  }, []);

  const addStay = async () => {
    const response = await fetch("http://localhost:5000/api/stays", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        location,
        price: Number(price),
      }),
    });

    if (response.ok) {
      setName("");
      setLocation("");
      setPrice("");

      // refresh list (READ part working)
      const res = await fetch("http://localhost:5000/api/stays");
      const data = await res.json();
      setStays(data);

      alert("Stay Added Successfully!");
    } else {
      alert("Failed to add stay");
    }
  };
  const deleteStay = async (id) => {
    const response = await fetch(`http://localhost:5000/api/stays/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setStays(stays.filter((stay) => stay._id !== id));
    } else {
      alert("Failed to delete stay");
    }
  };
  const searchStay = async () => {
    if (!search) return;

    const res = await fetch(
      `http://localhost:5000/api/stays/search/${search}`
    );

    const data = await res.json();
    setStays(data);
  };
  const resetStays = async () => {
    const res = await fetch("http://localhost:5000/api/stays");
    const data = await res.json();
    setStays(data);
  };
  console.log("STAYS:", stays);
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Hero />

      {/* SEARCH BAR HERE */}
      <div className="max-w-md mx-auto mt-6 flex gap-2">
        <input
          className="border p-2 w-full"
          placeholder="Search stays..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={searchStay}
          className="bg-black text-white px-4 rounded"
        >
          Search
        </button>

        <button
          onClick={resetStays}
          className="bg-gray-600 text-white px-4 rounded"
        >
          Reset
        </button>
      </div>
      {/* Add Stay Form */}
      <div className="max-w-md mx-auto mt-10 mb-10 space-y-3">
        <input
          className="border p-2 w-full"
          placeholder="Stay Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          onClick={addStay}
          className="bg-green-700 text-white px-4 py-2 rounded w-full"
        >
          Add Stay
        </button>
      </div>





      {/* Featured Stays */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-3">
          Featured Eco Stays
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Discover handpicked eco-friendly stays across Uttarakhand.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <Input placeholder="Enter destination..." />
        </div>

        <div className="flex justify-center mb-10">
          <Button text="Search" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stays.map((stay) => (
            <div key={stay._id}>
              <Card
                image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"
                title={stay.name || "Eco Stay"}
                description={stay.location || "Beautiful Location"}
                price={stay.price || 0}
                rating="4.8"
              />

              <button
                onClick={() => deleteStay(stay._id)}
                className="bg-red-600 text-white px-4 py-2 mt-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setEditStay(stay)}
                className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose EcoStay */}
      <section className="bg-green-50 dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
            Why Choose EcoStay?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Eco-Friendly
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sustainable stays that help preserve nature and local communities.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">🏔️</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Scenic Locations
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay surrounded by mountains, forests, lakes and villages.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Local Communities
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Support local hosts and experience authentic Uttarakhand culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto bg-green-700 text-white rounded-2xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready For Your Next Adventure?
          </h2>

          <p className="mb-6 text-lg">
            Book an eco-friendly stay and explore the beauty of Uttarakhand.
          </p>

          <a
            href="/booking"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      {editStay && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96 space-y-3">

            <h2 className="text-xl font-bold">Edit Stay</h2>

            <input
              className="border p-2 w-full"
              value={editStay.name}
              onChange={(e) =>
                setEditStay({ ...editStay, name: e.target.value })
              }
            />

            <input
              className="border p-2 w-full"
              value={editStay.location}
              onChange={(e) =>
                setEditStay({ ...editStay, location: e.target.value })
              }
            />

            <input
              className="border p-2 w-full"
              value={editStay.price}
              onChange={(e) =>
                setEditStay({ ...editStay, price: e.target.value })
              }
            />

            <button
              onClick={async () => {
                await fetch(`http://localhost:5000/api/stays/${editStay._id}`, {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(editStay),
                });

                setEditStay(null);

                const res = await fetch("http://localhost:5000/api/stays");
                const data = await res.json();
                setStays(data);
              }}
              className="bg-green-600 text-white px-4 py-2 rounded w-full"
            >
              Save
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
