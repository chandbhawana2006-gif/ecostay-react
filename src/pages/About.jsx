export default function About() {
  return (
    <div className="space-y-10">

      {/* HERO SECTION */}
      <div className="relative rounded-xl overflow-hidden h-72 md:h-96">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="Mountains"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            About EcoStay
          </h1>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-gray-600 text-lg">
          EcoStay is a sustainable travel platform that connects you with
          eco-friendly homestays surrounded by nature. Experience mountains,
          forests, and peaceful villages while supporting local communities.
        </p>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="h-40 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-green-700">Mountain Stays</h3>
            <p className="text-gray-600 text-sm">
              Stay in beautiful mountain homestays with breathtaking views.
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
            className="h-40 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-green-700">Forest Experience</h3>
            <p className="text-gray-600 text-sm">
              Explore deep forests and enjoy peaceful nature walks.
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
            className="h-40 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-green-700">Village Life</h3>
            <p className="text-gray-600 text-sm">
              Experience local culture and traditional village lifestyle.
            </p>
          </div>
        </div>

      </div>

      {/* MISSION SECTION */}
      <div className="bg-green-50 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold text-green-700">
          Our Mission
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          To promote eco-tourism, protect nature, and support local communities
          by offering sustainable travel experiences.
        </p>
      </div>

    </div>
  );
}