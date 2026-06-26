const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const stays = [
    {
        id: 1,
        name: "Mountain View Stay",
        location: "Manali",
        price: 2500
    },
    {
        id: 2,
        name: "Eco Forest Hut",
        location: "Nainital",
        price: 1800
    }
];

// GET all stays
app.get("/api/stays", (req, res) => {
    res.status(200).json(stays);
});

// GET stay by ID
app.get("/api/stays/:id", (req, res) => {
    const stay = stays.find(
        s => s.id === parseInt(req.params.id)
    );

    if (!stay) {
        return res.status(404).json({
            message: "Stay not found"
        });
    }

    res.status(200).json(stay);
});

// POST create stay
app.post("/api/stays", (req, res) => {
    const newStay = {
        id: stays.length + 1,
        ...req.body
    };

    stays.push(newStay);

    res.status(201).json(newStay);
});

// PUT update stay
app.put("/api/stays/:id", (req, res) => {
    const index = stays.findIndex(
        s => s.id === parseInt(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Stay not found"
        });
    }

    stays[index] = {
        ...stays[index],
        ...req.body
    };

    res.status(200).json(stays[index]);
});

// DELETE stay
app.delete("/api/stays/:id", (req, res) => {
    const index = stays.findIndex(
        s => s.id === parseInt(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Stay not found"
        });
    }

    stays.splice(index, 1);

    res.status(204).send();
});

// SEARCH stay
app.get("/api/stays/search/:name", (req, res) => {
    const result = stays.filter(stay =>
        stay.name
            .toLowerCase()
            .includes(req.params.name.toLowerCase())
    );

    res.status(200).json(result);
});

// Home route
app.get("/", (req, res) => {
    res.send("EcoStay Backend Running");
});
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        message: "Internal Server Error"
    });
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});