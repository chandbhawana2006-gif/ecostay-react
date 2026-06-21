import { Input, Button } from "../components/ui";
import Hero from "../components/Hero";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">

      
      <Hero />

      {/* Featured Stays */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-3">
          Featured Eco Stays
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Discover handpicked eco-friendly stays across Uttarakhand.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <Input
            placeholder="Enter destination..."
          />
        </div>

        <div className="flex justify-center mb-10">
          <Button text="Search" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <Card
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"
            title="Mountain Cottage"
            description="Cozy wooden cottage with breathtaking Himalayan views."
            price="2500"
            rating="4.9"
          />

          <Card
            image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
            title="Forest Retreat"
            description="Stay amidst lush forests and reconnect with nature."
            price="3200"
            rating="4.8"
          />

          <Card
            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
            title="Village Homestay"
            description="Experience authentic village culture and hospitality."
            price="1800"
            rating="5.0"
          />

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

    </div>
  );
}