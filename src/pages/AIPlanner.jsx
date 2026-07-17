import { useState } from "react";

export default function AIPlanner() {
    const [destination, setDestination] = useState("");
    const [days, setDays] = useState("");
    const [interests, setInterests] = useState("");

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const generateItinerary = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");
        setResult("");

        try {
            const response = await fetch("http://localhost:5000/api/ai/travel", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    destination,
                    days,
                    interests,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong.");
            }

            setResult(data.result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
                🌿 AI Travel Planner
            </h1>

            <form
                onSubmit={generateItinerary}
                className="bg-white shadow-lg rounded-xl p-6 space-y-5"
            >
                <input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full border rounded-lg p-3"
                    required
                />

                <input
                    type="number"
                    placeholder="Number of Days"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    className="w-full border rounded-lg p-3"
                    required
                />

                <input
                    type="text"
                    placeholder="Interests (Adventure, Nature...)"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    className="w-full border rounded-lg p-3"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
                >
                    {loading ? "Generating..." : "Generate AI Itinerary"}
                </button>
            </form>

            {loading && (
                <div className="mt-8 text-center text-lg text-green-700 font-semibold">
                    ✨ Generating your personalized itinerary...
                </div>
            )}

            {error && (
                <div className="mt-8 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg">
                    {error}
                </div>
            )}

            {result && (
                <div className="mt-8 bg-gray-50 border rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">
                        AI Recommendation
                    </h2>

                    <pre className="whitespace-pre-wrap font-sans">
                        {result}
                    </pre>
                </div>
            )}
        </div>
    );
}