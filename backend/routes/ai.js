const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const router = express.Router();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

router.post("/travel", async (req, res) => {
    try {
        const { destination, days, interests } = req.body;

        if (!destination || !days || !interests) {
            return res.status(400).json({
                success: false,
                message: "Please provide destination, days and interests.",
            });
        }

        const prompt = `
You are an expert eco-tourism travel assistant.

Create a personalized eco-friendly travel itinerary.

Destination: ${destination}
Days: ${days}
Interests: ${interests}

Include:
1. Day-wise itinerary
2. Places to visit
3. Local food recommendations
4. Eco-friendly travel tips
5. Estimated budget
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        res.status(200).json({
            success: true,
            result: response.text,
        });

    } catch (error) {
        console.error("Gemini Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to generate AI itinerary.",
        });
    }
});

module.exports = router;